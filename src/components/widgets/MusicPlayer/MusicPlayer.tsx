import { usePlayer } from '@context/PlayerContext';
import PlayerControls from './PlayerControls';
import Timer from './Timer';
import Volume from './Volume';

function MusicPlayer() {
  const { isVisible, isExpanded, currentTrack, toggleExpand, hide, show } = usePlayer();

  if (!currentTrack) return null;

  return (
    <>
      <div className={`player ${!isVisible ? 'isHidden' : ''}`}>
        <div className="player__body">
          <div className="player__button__wrapper">
            <button className="player__button expand" onClick={toggleExpand}>
              <span>{isExpanded ? 'Reduce' : 'Expand'}</span>
              <i className={isExpanded ? 'rob-minimize-circle' : 'rob-maximize-circle'} />
            </button>
            <button className="player__button close" onClick={hide}>
              <span>close</span>
              <i className="rob-close" />
            </button>
          </div>

          <div className="player__body__wrapper">
            <div className="player__content">
              <div
                className={`player__cover ${isExpanded ? 'isExpand' : ''}`}
                style={{ height: isExpanded ? '180px' : '0px' }}
              >
                <img src={currentTrack.album.cover} alt={currentTrack.album.title} />
              </div>

              <div className="player__detail">
                <div className="player__detail__name">{currentTrack.artist.name}</div>
                <div className="player__detail__title">{currentTrack.title}</div>
              </div>

              <Timer />
              <PlayerControls />
            </div>

            <Volume />
          </div>
        </div>
      </div>

      <button className="player__cta" onClick={show} data-animation="scale">
        <div className="player__cta__icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
      </button>
    </>
  );
}

export default MusicPlayer;
