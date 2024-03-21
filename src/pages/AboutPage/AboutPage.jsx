import { Helmet, HelmetProvider } from 'react-helmet-async';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { About } from '../../components/About/About';

const AboutPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <PageTitle title="About" subtitle="Learn more about me" />
      <About />
    </HelmetProvider>
  );
};

export default AboutPage;
