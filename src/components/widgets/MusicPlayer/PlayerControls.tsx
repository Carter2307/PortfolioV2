import { usePlayer } from '@context/PlayerContext';

function PlayerControls() {
  const { isPlaying, toggle, next, prev } = usePlayer();

  return (
    <div className="player__navigation">
      <button
        className="player__navigation__button"
        data-icon="rob-backward"
        onClick={prev}
        aria-label="Previous track"
      >
        <i className="rob-backward" />
      </button>

      <button
        className="player__navigation__button"
        data-icon={isPlaying ? 'rob-pause' : 'rob-play'}
        onClick={toggle}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        <i className={isPlaying ? 'rob-pause' : 'rob-play'} />
      </button>

      <button
        className="player__navigation__button"
        data-icon="rob-forward"
        onClick={next}
        aria-label="Next track"
      >
        <i className="rob-forward" />
      </button>
    </div>
  );
}

export default PlayerControls;
