import { usePlayer } from '@context/PlayerContext';
import { formatTime } from '@utils/formatTime';

function Timer() {
  const { currentTime, duration, seek } = usePlayer();

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    seek(newTime);
  };

  return (
    <div className="player__timer">
      <div className="player__timer__progress">
        <input
          className="player__timer__progress__range"
          id="range"
          type="range"
          min="0"
          max={duration || 100}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
        />
        <span
          className="player__timer__progress__bar"
          style={{ width: `${progress}%` }}
        />
        <span className="player__timer__progress__elapse" />
      </div>

      <div className="player__timer__times">
        <span className="player__timer__times__starttime">
          {formatTime(currentTime)}
        </span>
        <span className="player__timer__times__endtime">
          {formatTime(duration)}
        </span>
      </div>
    </div>
  );
}

export default Timer;
