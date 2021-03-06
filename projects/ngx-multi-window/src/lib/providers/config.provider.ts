import { InjectionToken } from '@angular/core';
import { MultiWindowConfig } from '../types/multi-window.config';
import { WindowSaveStrategy } from '../types/window-save-strategy.enum';

export const NGXMW_CONFIG = new InjectionToken<MultiWindowConfig>('ngxmw_config');

export const defaultMultiWindowConfig: MultiWindowConfig = {
  keyPrefix: 'ngxmw_',
  heartbeat: 1000,
  newWindowScan: 5000,
  messageTimeout: 10000,
  windowTimeout: 15000,
  windowSaveStrategy: WindowSaveStrategy.NONE,
};
