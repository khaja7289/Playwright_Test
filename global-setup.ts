// global-setup.ts
import { FullConfig } from '@playwright/test';

export default async function globalSetup(config: FullConfig) {
  // Set the desired device name here
  process.env.DEVICE_NAME = 'iPhone 15 landscape';
}
