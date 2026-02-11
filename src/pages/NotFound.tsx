import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__wrapper">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="button button__primary button-bg">
          <span>Go back home</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
