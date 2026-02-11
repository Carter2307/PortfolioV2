import { Link, useLocation } from 'react-router-dom';

interface NavLink {
  name: string;
  url: string;
  disabled?: boolean;
}

interface NavigationProps {
  links: NavLink[];
  onClose?: () => void;
}

function Navigation({ links, onClose }: NavigationProps) {
  const location = useLocation();

  const isActive = (url: string) => location.pathname === url;

  return (
    <nav className="mobile-nav">
      <ul className="mobile-nav__links">
        {links.map((link, index) => (
          <li
            key={index}
            className={`mobile-nav__links__item ${isActive(link.url) ? 'menu__links__item-active' : ''}`}
          >
            <Link
              to={link.url}
              className="mobile-nav__links__item__link"
              onClick={onClose}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
