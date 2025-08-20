import type { Scene } from '../types';
import { chapter1Data } from './chapter1';
import { chapter2Data } from './chapter2';
import { chapter3Data } from './chapter3';

// This is where we will combine all the chapter data into a single object.
// As we add more chapters (chapter2.ts, chapter3.ts, etc.), we'll import them
// here and spread them into the gameData object.

export const gameData: Record<string, Scene> = {
  ...chapter1Data,
  ...chapter2Data,
  ...chapter3Data,
};
