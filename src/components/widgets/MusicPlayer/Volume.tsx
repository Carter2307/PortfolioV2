import { useRef, useState, useCallback } from 'react';
import { usePlayer } from '@context/PlayerContext';

function Volume() {
  const { volume, setVolume } = usePlayer();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const positionRef = useRef({ current: 0 });

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.stopPropagation();
    positionRef.current.current = e.clientY;
    setIsDragging(true);
    document.body.style.cursor = 'ns-resize';

    const handlePointerMove = (moveEvent: PointerEvent) => {
      moveEvent.preventDefault();
      moveEvent.stopPropagation();

      const distance = positionRef.current.current - moveEvent.clientY;
      if (distance !== 0) {
        const step = 0.005;
        const newVolume = volume + (distance > 0 ? step : -step);
        setVolume(clamp(newVolume, 0, 1));
      }
      positionRef.current.current = moveEvent.clientY;
    };

    const handlePointerUp = (upEvent: PointerEvent) => {
      upEvent.preventDefault();
      upEvent.stopPropagation();
      setIsDragging(false);
      document.body.style.cursor = 'default';
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  }, [volume, setVolume]);

  const volumePercent = volume * 100;
  const isMuted = volume === 0;

  return (
    <div className="player__volume">
      <div
        ref={containerRef}
        className="player__volume__wrapper"
        onPointerDown={handlePointerDown}
        style={{ cursor: isDragging ? 'ns-resize' : 'pointer' }}
      >
        <div
          className="player__volume__slider"
          style={{ height: `${volumePercent}%` }}
        >
          <div className="player__volume__grap" />
          <i className={`${isMuted ? 'rob-volume-cross' : 'rob-volume-high'} player__volume__icon`} />
        </div>
      </div>
    </div>
  );
}

export default Volume;
