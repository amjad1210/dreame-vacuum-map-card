import { CircularButton } from '@/components/common';
import type { WaterVolume } from '@/types/vacuum';
import { getWaterVolumeIcon, getWaterVolumeFriendlyName, convertToLowerCase } from '@/utils';

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

const DEFAULT_WATER_VOLUMES = ['Low', 'Medium', 'High'];

interface WaterVolumeSelectorProps {
  waterVolume: string;
  waterVolumeList: string[];
  onSelect: (entityId: string, value: string) => void;
  entityId: string;
  t?: TranslateFunction;
  disabled?: boolean;
}

export function WaterVolumeSelector({
  waterVolume,
  waterVolumeList,
  onSelect,
  entityId,
  t,
  disabled = false,
}: WaterVolumeSelectorProps) {
  const displayList = waterVolumeList.length > 0 ? waterVolumeList : DEFAULT_WATER_VOLUMES;

  return (
    <div className={`cleaning-mode-modal__power-grid ${disabled ? 'cleaning-mode-modal__power-grid--disabled' : ''}`}>
      {displayList.map((level, idx) => (
        <div key={idx} className="cleaning-mode-modal__power-option">
          <CircularButton
            size="small"
            selected={level === waterVolume}
            onClick={() => !disabled && onSelect(entityId, convertToLowerCase(level))}
            icon={getWaterVolumeIcon(level as WaterVolume)}
            disabled={disabled}
          />
          <span className="cleaning-mode-modal__power-label">
            {getWaterVolumeFriendlyName(level as WaterVolume, t)}
          </span>
        </div>
      ))}
    </div>
  );
}
