function About() {
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__header">
          <h1 className="about__header__title">
            <span className="about__header__title__text">ROGER BENTCHA</span>
            <span className="about__header__title__text">23/JUL '99 - CM</span>
            <span className="about__header__title__text">
              CREATIVE
              <span className="about__header__title__text__line" />
            </span>
            <span className="about__header__title__text">+ DEVELOPER</span>
          </h1>
          <div className="about__img__container">
            <p className="about__img__text">
              Shoot for the moon, and you'll never be disappointed.
            </p>
            <div className="about__img">
              <img src="/images/moon.png" alt="Moon" />
            </div>
            <p className="about__img__author">
              Photo by{' '}
              <a
                href="https://unsplash.com/@ninoliverpool"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nino Yang
              </a>{' '}
              on{' '}
              <a
                href="https://unsplash.com/wallpapers/design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </p>
          </div>
        </div>

        <div className="about__text">
          <h3 className="about__text__title" data-animation="title">
            About me
          </h3>
          <div className="about__text__desc">
            <p className="about__text__content" data-animation="paragraph">
              I have been passionate about technology since a young age and have
              developed a particular interest in web programming and software
              development. I have acquired strong skills in programming languages
              such as HTML, CSS, and JavaScript, and I am always learning new
              technologies and trends in the field.
            </p>
            <p className="about__text__content" data-animation="paragraph">
              I enjoy designing aesthetic and functional user interfaces and have
              worked on many projects that have allowed me to develop a deep
              understanding of user experience. My goal is to create innovative
              software solutions that meet my clients' needs while providing an
              exceptional user experience. I love working in a team and collaborating
              with other developers to solve the most complex technical challenges.
              I look forward to continuing to explore and learn in this exciting field.
            </p>
          </div>
        </div>

        <div className="about__img__container">
          <p className="about__img__text">
            Be yourself, dream big, and keep going.
          </p>
          <div className="about__img">
            <img src="/images/circle.png" alt="Circle" />
          </div>
          <p className="about__img__author">
            Photo by{' '}
            <a
              href="https://unsplash.com/it/@theshubhamdhage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shubham Dhage
            </a>{' '}
            on{' '}
            <a
              href="https://unsplash.com/wallpapers/design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
