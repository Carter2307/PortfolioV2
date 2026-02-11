function Frameworks() {
  return (
    <section className="tools">
      <div className="tools__wrapper">
        <div className="tools__frameworks">
          <div className="tools__frameworks__content">
            <span className="tools__frameworks__content__icons">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
              </svg>
            </span>
            <h3 className="tools__frameworks__content__title" data-animation="title">
              Frameworks and tools
            </h3>
            <p className="tools__frameworks__content__text" data-animation="paragraph">
              I use many tools to achieve my creative work.
              I usually begin by writing or sketching my ideas on paper,
              and then transfer those ideas to design software before starting to code.
            </p>
          </div>

          <div className="tools__frameworks__icons">
            <h3 className="tools__frameworks__icons__title" data-animation="title">
              Frontend
            </h3>
            <div className="tools__frameworks__icons__content">
              <ul className="tools__frameworks__icons__content__list">
                <li className="tools__frameworks__icons__items tools__frameworks__icons__items__small">
                  <img src="/images/icons/js.svg" alt="JavaScript" />
                </li>
                <li className="tools__frameworks__icons__items tools__frameworks__icons__items__small">
                  <img src="/images/icons/ts.svg" alt="TypeScript" />
                </li>
                <li className="tools__frameworks__icons__items tools__frameworks__icons__items__small">
                  <img src="/images/icons/html.svg" alt="HTML" />
                </li>
              </ul>
              <ul className="tools__frameworks__icons__content__list">
                <li className="tools__frameworks__icons__items tools__frameworks__icons__items__small">
                  <img src="/images/icons/css.svg" alt="CSS" />
                </li>
                <li className="tools__frameworks__icons__items tools__frameworks__icons__items__small">
                  <img src="/images/icons/sass.svg" alt="SASS" />
                </li>
                <li className="tools__frameworks__icons__items tools__frameworks__icons__items__small">
                  <img src="/images/icons/git.svg" alt="Git" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tools__techno">
          <div className="tools__techno__wrapper">
            <div className="tools__techno__backend">
              <h4 className="tools__techno__title" data-animation="title">Backend</h4>
              <ul className="tools__frameworks__icons__content__list tools__frameworks__icons__content__list__tools">
                <li className="tools__frameworks__icons__items">
                  <img src="/images/icons/express.svg" alt="Express" />
                </li>
                <li className="tools__frameworks__icons__items tools__frameworks-disabled" />
                <li className="tools__frameworks__icons__items tools__frameworks-disabled" />
                <li className="tools__frameworks__icons__items">
                  <img src="/images/icons/node.svg" alt="Node.js" />
                </li>
              </ul>
            </div>

            <div className="tools__techno__design">
              <h4 className="tools__techno__title" data-animation="title">Design</h4>
              <ul className="tools__frameworks__icons__content__list tools__frameworks__icons__content__list__tools">
                <li className="tools__frameworks__icons__items">
                  <img src="/images/icons/figma.svg" alt="Figma" />
                </li>
                <li className="tools__frameworks__icons__items tools__frameworks-disabled" />
                <li className="tools__frameworks__icons__items">
                  <img src="/images/icons/xd.svg" alt="Adobe XD" />
                </li>
                <li className="tools__frameworks__icons__items tools__frameworks-disabled">
                  <img src="/images/icons/illustrator.svg" alt="Illustrator" />
                </li>
              </ul>
            </div>

            <div className="tools__techno__editor">
              <h4 className="tools__techno__title" data-animation="title">Editor</h4>
              <ul className="tools__frameworks__icons__content__list tools__frameworks__icons__content__list__tools">
                <li className="tools__frameworks__icons__items">
                  <img src="/images/icons/vscode.svg" alt="VS Code" />
                </li>
                <li className="tools__frameworks__icons__items tools__frameworks-disabled" />
                <li className="tools__frameworks__icons__items tools__frameworks-disabled" />
                <li className="tools__frameworks__icons__items">
                  <img src="/images/icons/webstorm.svg" alt="WebStorm" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Frameworks;
