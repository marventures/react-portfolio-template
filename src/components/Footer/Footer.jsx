import css from './Footer.module.css';
import { footerDetails } from '../../data/footer';

export const Footer = () => {
  const { name } = footerDetails;
  return (
    <footer>
      <p className={css.footerText}>
        &copy; {new Date().getFullYear()} {name}
      </p>
    </footer>
  );
};
