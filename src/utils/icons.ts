/**
 * Utility functions for icon mappings
 * Maps various vacuum states and modes to SVG or emoji icons
 */

import type { ReactElement } from 'react';
import {
  CLEANGENIUS_MODE,
  SUCTION_LEVEL,
  CLEANING_ROUTE,
  SELF_CLEAN_FREQUENCY,
  WATER_VOLUME,
  VACUUM_ICON_SVG,
  MOP_ICON_SVG,
  VACUUM_MOP_ICON_SVG,
  MOP_AFTER_VACUUM_ICON_SVG,
  SUCTION_QUIET_ICON_SVG,
  SUCTION_STANDARD_ICON_SVG,
  SUCTION_STRONG_ICON_SVG,
  SUCTION_TURBO_ICON_SVG,
  CLEANING_MODE,
  CLEANING_ROUTE_QUICK_ICON_SVG,
  CLEANING_ROUTE_STANDARD_ICON_SVG,
  CLEANING_ROUTE_INTENSIVE_ICON_SVG,
  CLEANING_ROUTE_DEEP_ICON_SVG,
  MOP_WASHING_FREQUENCY_BY_AREA_ICON_SVG,
  MOP_WASHING_FREQUENCY_BY_TIME_ICON_SVG,
  MOP_WASHING_FREQUENCY_BY_ROOM_ICON_SVG,
  CUSTOMIZE_ICON_SVG,
  WATER_VOLUME_ICON_SVG,
} from '@/constants';
import type {
  VacuumCleaningMode,
  CleanGeniusMode,
  SuctionLevel,
  CleaningRoute,
  SelfCleanFrequency,
  WaterVolume,
} from '@/types/vacuum';

export function getCleaningModeIcon(mode: VacuumCleaningMode): ReactElement | string {
  switch (mode) {
    case CLEANING_MODE.SWEEPING:
      return VACUUM_ICON_SVG;
    case CLEANING_MODE.MOPPING:
      return MOP_ICON_SVG;
    case CLEANING_MODE.SWEEPING_AND_MOPPING:
      return VACUUM_MOP_ICON_SVG;
    case CLEANING_MODE.MOPPING_AFTER_SWEEPING:
      return MOP_AFTER_VACUUM_ICON_SVG;
    case CLEANING_MODE.CUSTOMIZE:
      return CUSTOMIZE_ICON_SVG;
    default:
      return '';
  }
}

export function getCleanGeniusModeIcon(mode: CleanGeniusMode): ReactElement | string {
  switch (mode) {
    case CLEANGENIUS_MODE.VACUUM_AND_MOP:
      return VACUUM_MOP_ICON_SVG;
    case CLEANGENIUS_MODE.MOP_AFTER_VACUUM:
      return MOP_AFTER_VACUUM_ICON_SVG;
    default:
      return '';
  }
}

export function getSuctionLevelIcon(level: SuctionLevel): ReactElement | string {
  switch (level) {
    case SUCTION_LEVEL.QUIET:
    case SUCTION_LEVEL.SILENT:
      return SUCTION_QUIET_ICON_SVG;
    case SUCTION_LEVEL.STANDARD:
      return SUCTION_STANDARD_ICON_SVG;
    case SUCTION_LEVEL.STRONG:
      return SUCTION_STRONG_ICON_SVG;
    case SUCTION_LEVEL.TURBO:
      return SUCTION_TURBO_ICON_SVG;
  }
}

export function getCleaningRouteIcon(route: CleaningRoute): ReactElement | string {
  switch (route) {
    case CLEANING_ROUTE.QUICK:
      return CLEANING_ROUTE_QUICK_ICON_SVG;
    case CLEANING_ROUTE.STANDARD:
      return CLEANING_ROUTE_STANDARD_ICON_SVG;
    case CLEANING_ROUTE.INTENSIVE:
      return CLEANING_ROUTE_INTENSIVE_ICON_SVG;
    case CLEANING_ROUTE.DEEP:
      return CLEANING_ROUTE_DEEP_ICON_SVG;
  }
}

export function getSelfCleanFrequencyIcon(frequency: SelfCleanFrequency): ReactElement | string {
  switch (frequency) {
    case SELF_CLEAN_FREQUENCY.BY_AREA:
      return MOP_WASHING_FREQUENCY_BY_AREA_ICON_SVG;
    case SELF_CLEAN_FREQUENCY.BY_TIME:
      return MOP_WASHING_FREQUENCY_BY_TIME_ICON_SVG;
    case SELF_CLEAN_FREQUENCY.BY_ROOM:
      return MOP_WASHING_FREQUENCY_BY_ROOM_ICON_SVG;
    default:
      return '⚙️';
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getWaterVolumeIcon(_: WaterVolume): ReactElement {
  return WATER_VOLUME_ICON_SVG;
}

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

export function getWaterVolumeFriendlyName(level: WaterVolume, t?: TranslateFunction): string {
  if (t) {
    switch (level) {
      case WATER_VOLUME.LOW:
        return t('custom_mode.water_low');
      case WATER_VOLUME.MEDIUM:
        return t('custom_mode.water_medium');
      case WATER_VOLUME.HIGH:
        return t('custom_mode.water_high');
      default:
        return level;
    }
  }
  return level;
}
