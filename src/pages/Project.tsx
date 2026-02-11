import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data';

function Project() {
  const { id } = useParams<{ id: string }>();
  const projectIndex = id ? parseInt(id, 10) : 0;
  const project = projects[projectIndex] || projects[0];

  if (!project) {
    return (
      <div className="project">
        <div className="project__wrapper">
          <h1>Project not found</h1>
          <Link to="/" className="button button__primary">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project">
      <div className="project__wrapper">
        <div className="project__header">
          <h1 className="project__title" data-animation="title">
            {project.title}
          </h1>
          <div className="project__roles">
            <h4>Roles:</h4>
            <ul>
              {project.role.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project__content">
          <div className="project__image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project__description">
            <p data-animation="paragraph">{project.description}</p>
            <a
              href={project.link}
              className="button button__primary button-bg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Visit Project</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </a>
          </div>
        </div>

        <Link to="/" className="project__back">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          <span>Back to home</span>
        </Link>
      </div>
    </div>
  );
}

export default Project;
