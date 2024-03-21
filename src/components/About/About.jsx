import css from './About.module.css';
import aboutImage from '../../images/about-1.png';
// prettier-ignore
import { aboutMeDetails, aboutList1, aboutList2, aboutList3, aboutList4 } from '../../data/about';

export const About = () => {
  const { position, description } = aboutMeDetails;

  return (
    <div className={css.aboutContainer}>
      {/* ABOUT TOP PORTION */}
      <div className={css.topPortion}>
        {/* About Image */}
        <img
          className={css.aboutImage}
          src={aboutImage}
          alt="Juan Dela Cruz"
          width="300"
          height="400"
        />

        {/* About thumb details*/}
        <div className={css.topWrap}>
          {/* position */}
          <h3 className={css.topWrapPos}>{position}</h3>
          <p className={css.topWrapDesc}>{description}</p>

          <div className={css.topWrapThumb}>
            {/* about me 1 */}
            <ul>
              {aboutList1.map(({ id, description, value }) => (
                <li className={css.aboutListItem} key={id}>
                  <pre className={css.pre}></pre>
                  <strong>{description}: &nbsp;</strong>
                  <span>{value}</span>
                </li>
              ))}
            </ul>

            {/* about me 2 */}
            <ul>
              {aboutList2.map(({ id, description, value }) => (
                <li className={css.aboutListItem} key={id}>
                  <pre className={css.pre}></pre>
                  <strong>{description}: &nbsp;</strong>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ABOUT BOTTOM PORTION */}
      <div className={css.bottomPortion}>
        {/* Education */}
        <div>
          <h3 className={css.bottomPortionTitle}>Education</h3>
          <ul>
            {aboutList3.map(({ id, school, year, course }) => (
              <li className={css.aboutListItem} key={id}>
                <pre className={css.pre}></pre>
                <span>
                  <strong>{school}</strong> | {year} | {course}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Work Experience */}
        <div>
          <h3 className={css.bottomPortionTitle}>Work Experience</h3>
          <ul>
            {aboutList4.map(({ id, company, year, position }) => (
              <li className={css.aboutListItem} key={id}>
                <pre className={css.pre}></pre>
                <span>
                  <strong>{company}</strong> | {year} | {position}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
