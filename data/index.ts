import type { Scene } from '../types';
import { chapter1Data } from './chapter1';
import { chapter2Data } from './chapter2';
import { chapter3Data } from './chapter3';
import { chapter4Data } from './chapter4';
import { chapter5Data } from './chapter5';
import { chapter6Data } from './chapter6';
import { chapter7Data } from './chapter7';
import { chapter8Data } from './chapter8';
import { chapter9Data } from './chapter9';
import { chapter10Data } from './chapter10';
import { chapter11Data } from './chapter11';
import { chapter12Data } from './chapter12';
import { chapter13Data } from './chapter13';
import { chapter14Data } from './chapter14';
import { chapter15Data } from './chapter15';


// This is where we will combine all the chapter data into a single object.
// As we add more chapters, we'll import them
// here and spread them into the gameData object.

export const gameData: Record<string, Scene> = {
  ...chapter1Data,
  ...chapter2Data,
  ...chapter3Data,
  ...chapter4Data,
  ...chapter5Data,
  ...chapter6Data,
  ...chapter7Data,
  ...chapter8Data,
  ...chapter9Data,
  ...chapter10Data,
  ...chapter11Data,
  ...chapter12Data,
  ...chapter13Data,
  ...chapter14Data,
  ...chapter15Data,
};