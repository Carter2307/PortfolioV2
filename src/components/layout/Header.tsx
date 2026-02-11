import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from './Navigation';

const linksLeft = [
  { name: 'Template', url: '/', disabled: true },
  { name: 'Library', url: '/library', disabled: true },
  { name: 'Photos', url: '/photographies', disabled: false },
];

const linksRight = [
  { name: 'Home', url: '/', disabled: false },
  { name: 'Projects', url: '/projects', disabled: false },
  { name: 'About me', url: '/about', disabled: false },
];

function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (url: string) => location.pathname === url;

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <ul className="header__links">
            {linksLeft.map((link, index) => (
              <li key={index} className="header__links__item">
                {link.disabled ? (
                  <span className="header__links__item__link header__links__item__link--disabled">
                    {link.name}
                  </span>
                ) : (
                  <Link
                    to={link.url}
                    className={`header__links__item__link ${isActive(link.url) ? 'menu__links__item-active' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="header__content">
            <a
              href="https://twitter.com/RBentcha"
              className="header__icons__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="header__icons__link__item">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
            </a>

            <Link to="/" className="header__logo">
              ROGER--B
            </Link>

            <a
              href="mailto:rogerbentcha@gmail.com"
              className="header__icons__link"
            >
              <span className="header__icons__link__item">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
            </a>
          </div>

          <ul className="header__links">
            {linksRight.map((link, index) => (
              <li key={index} className="header__links__item">
                {link.disabled ? (
                  <span className="header__links__item__link header__links__item__link--disabled">
                    {link.name}
                  </span>
                ) : (
                  <Link
                    to={link.url}
                    className={`header__links__item__link ${isActive(link.url) ? 'menu__links__item-active' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <header className="menu mobile-header">
        <button
          className="mobile-menu-button menu-button-open"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="mobile-menu-button__icons">
            <span className="mobile-menu-button__icons__item" />
            <span className="mobile-menu-button__icons__item" />
            <span className="mobile-menu-button__icons__item" />
          </div>
        </button>
        <div className={`mobile-header__container ${mobileMenuOpen ? 'menu-visible' : ''}`}>
          <Navigation
            links={[...linksRight, ...linksLeft.filter(l => !l.disabled)]}
            onClose={() => setMobileMenuOpen(false)}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
