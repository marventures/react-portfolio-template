import css from './Socials.module.css';
import { socialLinks } from '../../data/social-links';

export const Socials = () => {
  return (
    <ul className={css.socialsList}>
      {socialLinks.map(({ id, href, icon: Icon }) => (
        <li className={css.socialsListItem} key={id}>
          <a
            className={css.socialsLink}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon className={css.socialsIcon} />
          </a>
        </li>
      ))}
    </ul>
  );
};
