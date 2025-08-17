export const debugAudio = {
  // Check if audio is supported
  isAudioSupported(): boolean {
    return typeof window !== 'undefined' && 
           typeof window.AudioContext !== 'undefined' || 
           typeof (window as any).webkitAudioContext !== 'undefined';
  },

  // Check if autoplay is blocked
  async checkAutoplayPolicy(): Promise<boolean> {
    if (typeof window === 'undefined') return false;

    try {
      const audio = new Audio();
      audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
      audio.volume = 0;
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise;
        audio.pause();
        return true; // Autoplay is allowed
      }
      return false;
    } catch (error) {
      console.warn('Autoplay is blocked:', error);
      return false; // Autoplay is blocked
    }
  },

  // Test audio file loading
  async testAudioFile(src: string): Promise<boolean> {
    return new Promise((resolve) => {
      const audio = new Audio();
      
      audio.addEventListener('canplaythrough', () => {
        console.log(`✅ Audio file loaded successfully: ${src}`);
        resolve(true);
      }, { once: true });
      
      audio.addEventListener('error', (error) => {
        console.error(`❌ Failed to load audio file: ${src}`, error);
        resolve(false);
      }, { once: true });
      
      audio.addEventListener('timeout', () => {
        console.error(`⏰ Audio file load timeout: ${src}`);
        resolve(false);
      }, { once: true });
      
      // Set timeout for loading
      setTimeout(() => {
        console.error(`⏰ Audio file load timeout: ${src}`);
        resolve(false);
      }, 10000);
      
      audio.src = src;
    });
  },

  // Log audio context state
  logAudioContextState(): void {
    if (typeof window === 'undefined') return;

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      console.log('🎵 Audio Context State:', audioContext.state);
      console.log('🎵 Audio Context Sample Rate:', audioContext.sampleRate);
      console.log('🎵 Audio Context Base Latency:', audioContext.baseLatency);
    } catch (error) {
      console.error('❌ Failed to create Audio Context:', error);
    }
  },

  // Test audio playback
  async testAudioPlayback(src: string): Promise<boolean> {
    try {
      const audio = new Audio(src);
      audio.volume = 0.1; // Low volume for testing
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise;
        audio.pause();
        console.log(`✅ Audio playback test successful: ${src}`);
        return true;
      }
      return false;
    } catch (error) {
      console.error(`❌ Audio playback test failed: ${src}`, error);
      return false;
    }
  },

  // Comprehensive audio diagnostics
  async runDiagnostics(): Promise<void> {
    console.log('🔍 Running Audio Diagnostics...');
    
    // Check audio support
    const audioSupported = this.isAudioSupported();
    console.log('🎵 Audio Support:', audioSupported ? '✅ Supported' : '❌ Not Supported');
    
    // Check autoplay policy
    const autoplayAllowed = await this.checkAutoplayPolicy();
    console.log('🎵 Autoplay Policy:', autoplayAllowed ? '✅ Allowed' : '❌ Blocked');
    
    // Log audio context state
    this.logAudioContextState();
    
    // Test critical audio files
    const criticalFiles = ['/correct.mp3', '/incorrect.mp3', '/finish.mp3'];
    console.log('🎵 Testing critical audio files...');
    
    for (const file of criticalFiles) {
      const loaded = await this.testAudioFile(file);
      if (loaded) {
        const played = await this.testAudioPlayback(file);
        console.log(`🎵 ${file}:`, played ? '✅ Load & Play OK' : '❌ Play Failed');
      }
    }
    
    console.log('🔍 Audio Diagnostics Complete');
  }
};

// Auto-run diagnostics in development
if (process.env.NODE_ENV === 'development') {
  // Run diagnostics after a delay to ensure everything is loaded
  setTimeout(() => {
    debugAudio.runDiagnostics();
  }, 2000);
}

