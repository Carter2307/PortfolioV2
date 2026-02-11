import { Link } from 'react-router-dom';
import { photos } from '@/data';

function Photographies() {
  return (
    <div className="photographies">
      <ul className="photographies__wrapper">
        {photos.map((photo, index) => (
          <li key={index} className="photographies__item">
            <div className="photographies__item__image">
              <img
                className="photographies__item__pic"
                src={photo.image}
                alt={photo.title}
              />
            </div>
          </li>
        ))}
      </ul>
      <Link to="/" className="photographies__button">
        <div className="photographies__button__icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </div>
        <div className="photographies__button__text">Back to home</div>
      </Link>
    </div>
  );
}

export default Photographies;
