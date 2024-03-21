import { Helmet, HelmetProvider } from 'react-helmet-async';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Project } from '../../components/Project/Project';

const ProjectPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Projects</title>
      </Helmet>
      <PageTitle title="Projects" subtitle="Here are some of my works" />
      <Project />
    </HelmetProvider>
  );
};

export default ProjectPage;
