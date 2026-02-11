import { projects } from '@/data';

function Projects() {
  return (
    <section className="projects container" id="projects">
      <div className="projects__wrapper">
        <h2 className="projects__title" data-animation="title">
          Works
        </h2>
        <div className="projects__content">
          {projects.map((project, index) => (
            <div key={index} className="project__items">
              <div className="project__items__description">
                <div className="project__items__description__col">
                  <h3 className="project__items__description__title">
                    {project.title}
                  </h3>
                  <div className="project__items__description__details">
                    <h5 className="project__items__description__details__title">
                      Role:
                    </h5>
                    <ul className="project__items__description__details__list">
                      {project.role.map((role, roleIndex) => (
                        <li
                          key={roleIndex}
                          className="project__items__description__details__list__item"
                        >
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="project__items__description__detail">
                    {project.description}
                  </p>
                </div>
                <div className="project__items__description__col">
                  <a
                    href={project.link}
                    className="button button__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View project</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M9.29 6.71a.996.996 0 000 1.41L13.17 12l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project__items__image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
