import css from './PageTitle.module.css';
import PropTypes from 'prop-types';

export const PageTitle = ({ title, subtitle }) => {
  return (
    <div className={css.pageTitleContainer}>
      <h2 className={css.title}>{title}</h2>
      <h3 className={css.subtitle}>{subtitle}</h3>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
