import css from './Home.module.css';
import homeImage from '../../images/home-1.png';
import { Socials } from '../Socials/Socials';
import { homeDetails } from '../../data/home';

export const Home = () => {
  const { name, position, country } = homeDetails;

  return (
    <div className={css.homeContainer}>
      <div className={css.homeDetails}>
        <h1 className={css.homeName}>{name}</h1>
        <p className={css.homeText}>
          I am a {position} from {country}
        </p>
        {/* Social Links Component */}
        <Socials />
      </div>

      <img
        className={css.homeImage}
        src={homeImage}
        alt={name}
        width="400"
        height="500"
      />
    </div>
  );
};
