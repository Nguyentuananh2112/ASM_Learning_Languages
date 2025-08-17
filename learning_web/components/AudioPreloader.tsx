"use client";

import { useEffect } from 'react';
import { audioManager } from '@/lib/audio-utils';

// List of critical audio files to preload
const CRITICAL_AUDIO_FILES = [
  '/correct.mp3',
  '/incorrect.mp3',
  '/finish.mp3',
];

export const AudioPreloader = () => {
  useEffect(() => {
    // Preload critical audio files after user interaction
    const preloadAudio = async () => {
      try {
        console.log('Preloading critical audio files...');
        await Promise.allSettled(
          CRITICAL_AUDIO_FILES.map(src => audioManager.preloadAudio(src))
        );
        console.log('Critical audio files preloaded successfully');
      } catch (error) {
        console.error('Failed to preload audio files:', error);
      }
    };

    // Preload after a short delay to ensure audio context is ready
    const timer = setTimeout(preloadAudio, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
};

