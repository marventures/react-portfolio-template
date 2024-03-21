import css from './ContactForm.module.css';
import { contactInfo } from '../../data/contact';

export const ContactForm = () => {
  return (
    <div className={css.contactContainer}>
      <ul className={css.contactList}>
        {contactInfo.map(({ id, icon: Icon, child, description }) => (
          <li className={css.contactItem} key={id}>
            <div className={css.iconContainer}>
              <Icon />
            </div>
            <div className={css.contactDetails}>
              <h3 className={css.contactDesc}>{description}</h3>
              {child}
            </div>
          </li>
        ))}
      </ul>

      {/* Contact Form */}
      <form
        className={css.form}
        // please use your own getform api here
        action="https://getform.io/f/pbnveyob"
        method="POST"
      >
        <div className={css.formWrap}>
          <label className={css.formField}>
            <input
              className={css.formInput}
              type="text"
              name="name"
              placeholder="John Doe"
              required
            />
            <span className={css.formLabel}>Name *</span>
          </label>

          <label className={css.formField}>
            <input
              className={css.formInput}
              type="email"
              name="email"
              placeholder="john_doe@email.com"
              required
            />
            <span className={css.formLabel}>Email *</span>
          </label>
        </div>

        <label className={css.formField}>
          <textarea
            className={css.formTextArea}
            name="message"
            rows="8"
            placeholder="What's on your thoughts?"
          ></textarea>
          <span className={css.formLabel}>Message</span>
        </label>

        <button className={css.formButton} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
