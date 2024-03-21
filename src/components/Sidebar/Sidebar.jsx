import { NavLink } from 'react-router-dom';
import css from './Sidebar.module.css';
import { navLinks } from '../../data/nav-links';
import { MdOutlineClose } from 'react-icons/md';
import PropTypes from 'prop-types';

export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className={css.overlay} onClick={onClose}></div>}

      <div className={`${css.sidebar} ${isOpen ? css.open : ''}`}>
        {/* Close Button */}
        <button className={css.closeButton} onClick={onClose}>
          <MdOutlineClose />
        </button>

        {/* Sidebar Links */}
        <nav>
          <ul className={css.linkList}>
            {navLinks.map(({ id, link, path }) => (
              <li key={id} onClick={onClose}>
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
      </div>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
