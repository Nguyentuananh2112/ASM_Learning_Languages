class AudioManager {
  private audioContext: AudioContext | null = null;
  private audioCache: Map<string, HTMLAudioElement> = new Map();
  private isInitialized = false;

  // Initialize audio context (must be called after user interaction)
  async initialize() {
    if (this.isInitialized) return;

    try {
      // Create audio context after user interaction
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Resume audio context if suspended
      if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }
      
      this.isInitialized = true;
      console.log('Audio context initialized successfully');
    } catch (error) {
      console.error('Failed to initialize audio context:', error);
    }
  }

  // Preload audio file
  async preloadAudio(src: string): Promise<HTMLAudioElement> {
    if (this.audioCache.has(src)) {
      return this.audioCache.get(src)!;
    }

    return new Promise((resolve, reject) => {
      const audio = new Audio();
      
      audio.addEventListener('canplaythrough', () => {
        this.audioCache.set(src, audio);
        resolve(audio);
      }, { once: true });
      
      audio.addEventListener('error', (error) => {
        console.error('Failed to load audio:', src, error);
        reject(error);
      }, { once: true });
      
      // Set audio properties for better compatibility
      audio.preload = 'auto';
      audio.volume = 0.7;
      
      // Add crossOrigin for external audio files if needed
      if (src.startsWith('http')) {
        audio.crossOrigin = 'anonymous';
      }
      
      audio.src = src;
    });
  }

  // Play audio with fallback
  async playAudio(src: string): Promise<void> {
    try {
      // Ensure audio context is initialized
      await this.initialize();
      
      // Get or preload audio
      let audio = this.audioCache.get(src);
      if (!audio) {
        audio = await this.preloadAudio(src);
      }
      
      // Reset audio to beginning
      audio.currentTime = 0;
      
      // Play audio
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        await playPromise;
        console.log('Audio played successfully:', src);
      }
    } catch (error) {
      console.error('Failed to play audio:', src, error);
      
      // Fallback: try to play without audio context
      try {
        const audio = new Audio(src);
        audio.volume = 0.7;
        await audio.play();
      } catch (fallbackError) {
        console.error('Fallback audio also failed:', fallbackError);
      }
    }
  }

  // Play multiple audio files sequentially
  async playAudioSequence(sources: string[]): Promise<void> {
    for (const src of sources) {
      try {
        await this.playAudio(src);
        // Wait a bit between audio files
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.error('Failed to play audio in sequence:', src, error);
      }
    }
  }

  // Stop all audio
  stopAllAudio(): void {
    this.audioCache.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  }

  // Clean up resources
  dispose(): void {
    this.stopAllAudio();
    this.audioCache.clear();
    this.audioContext?.close();
    this.audioContext = null;
    this.isInitialized = false;
  }
}

// Global audio manager instance
export const audioManager = new AudioManager();

// Hook for React components
export const useAudioManager = () => {
  const playAudio = async (src: string) => {
    await audioManager.playAudio(src);
  };

  const playAudioSequence = async (sources: string[]) => {
    await audioManager.playAudioSequence(sources);
  };

  const stopAllAudio = () => {
    audioManager.stopAllAudio();
  };

  return {
    playAudio,
    playAudioSequence,
    stopAllAudio,
  };
};

// Initialize audio context on first user interaction
export const initializeAudioOnInteraction = () => {
  const initAudio = async () => {
    await audioManager.initialize();
    // Remove event listeners after initialization
    document.removeEventListener('click', initAudio);
    document.removeEventListener('keydown', initAudio);
    document.removeEventListener('touchstart', initAudio);
  };

  document.addEventListener('click', initAudio, { once: true });
  document.addEventListener('keydown', initAudio, { once: true });
  document.addEventListener('touchstart', initAudio, { once: true });
};

