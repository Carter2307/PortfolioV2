function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__switch">
          <label className="switch">
            <input type="checkbox" disabled />
            <span className="switch__slider" />
          </label>
          <span className="badge">Soon</span>
        </div>

        <div className="footer__content">
          <p className="footer__content__copy" data-animation="title">
            COPYRIGHT {currentYear}
          </p>
          <p className="footer__content__name" data-animation="title">
            ROGER BENTCHA - hiddenc0ode@gmail.com
          </p>
        </div>

        <div className="footer__icons">
          <a
            href="https://twitter.com/RBentcha"
            className="header__icons__link__item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a
            href="mailto:rogerbentcha@gmail.com"
            className="header__icons__link__item"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
