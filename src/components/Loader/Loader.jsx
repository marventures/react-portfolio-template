import { PacmanLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <PacmanLoader color="#e85d04" loading size={100} />
    </div>
  );
};
