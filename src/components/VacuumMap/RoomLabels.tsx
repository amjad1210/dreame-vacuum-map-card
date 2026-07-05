import { useMemo } from 'react';
import type { Room, CalibrationPoint } from '@/types/homeassistant';
import { vacuumToMapCoordinates, type MapRotation } from '@/utils/roomParser';
import './RoomLabels.scss';

interface RoomLabelsProps {
  rooms: Room[];
  calibrationPoints: CalibrationPoint[];
  imageWidth: number;
  imageHeight: number;
  rotation?: MapRotation;
}

export function RoomLabels({ rooms, calibrationPoints, imageWidth, imageHeight, rotation = 0 }: RoomLabelsProps) {
  const fontSize = Math.max(imageWidth, imageHeight) * 0.025;
  const paddingX = fontSize * 0.6;
  const paddingY = fontSize * 0.4;
  const borderRadius = fontSize * 0.5;

  const labels = useMemo(() => {
    return rooms
      .filter((room) => room.visibility !== 'Hidden')
      .filter((room) => {
        const hasCenter = room.x !== undefined && room.y !== undefined;
        const hasBounds =
          room.x0 !== undefined && room.y0 !== undefined && room.x1 !== undefined && room.y1 !== undefined;
        return hasCenter || hasBounds;
      })
      .map((room) => {
        const centerX = room.x ?? (room.x0! + room.x1!) / 2;
        const centerY = room.y ?? (room.y0! + room.y1!) / 2;
        const pos = vacuumToMapCoordinates(
          centerX,
          centerY,
          calibrationPoints,
          imageWidth,
          imageHeight,
          rooms,
          rotation
        );
        return { id: room.id, name: room.name, x: pos.x, y: pos.y };
      });
  }, [rooms, calibrationPoints, imageWidth, imageHeight, rotation]);

  return (
    <svg className="room-labels" viewBox={`0 0 ${imageWidth} ${imageHeight}`} preserveAspectRatio="xMidYMid meet">
      {labels.map((label) => {
        const textWidth = label.name.length * fontSize * 0.6;
        const rectWidth = textWidth + paddingX * 2;
        const rectHeight = fontSize + paddingY * 2;

        return (
          <g key={label.id} transform={`translate(${label.x}, ${label.y})`}>
            <rect
              className="room-labels__bg"
              x={-rectWidth / 2}
              y={-rectHeight / 2}
              width={rectWidth}
              height={rectHeight}
              rx={borderRadius}
            />
            <text className="room-labels__text" textAnchor="middle" dominantBaseline="middle" fontSize={fontSize}>
              {label.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
