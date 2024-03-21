import { ContactForm } from '../../components/ContactForm/ContactForm';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact Me</title>
      </Helmet>
      <PageTitle title="Contact" subtitle="Contact Me" />
      <ContactForm />
    </HelmetProvider>
  );
};

export default ContactPage;
