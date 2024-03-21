import css from './Navbar.module.css';
import { navLinks } from '../../data/nav-links';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      {/* Navbar Links */}
      <ul className={css.linkList}>
        {navLinks.map(({ id, link, path }) => (
          <li key={id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.linkActive : css.link
              }
              to={path}
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
