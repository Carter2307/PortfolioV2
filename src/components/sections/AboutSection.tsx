import { Link } from 'react-router-dom';
import { photos } from '@/data';

function AboutSection() {
  return (
    <section className="about">
      <div className="about__wrappper">
        <div className="about__title">About me</div>
        <div className="about__content">
          <div className="about__description">
            <div className="about__description__number" data-animation="title">
              00
            </div>
            <div className="about__description__title" data-animation="title">
              About me
            </div>
            <div className="about__description__text" data-animation="paragraph">
              Passionate about technology, I aspire to specialize in web programming
              and software development. I am proficient in HTML, CSS, JavaScript,
              and enjoy designing visually appealing and functional user interfaces
              that provide an exceptional user experience. I am constantly keeping
              up-to-date with emerging trends and technologies to stay innovative.
            </div>
            <Link to="/about" className="button button__primary button-bg">
              <span>More about me</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </Link>
          </div>
          <div className="about__gallery">
            <div className="gallery">
              {photos.slice(0, 4).map((photo, index) => (
                <div key={index} className="gallery__item">
                  <img src={photo.image} alt={photo.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
