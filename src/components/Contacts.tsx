import { ChangeEvent, FormEvent, useState } from 'react';
// import emailjs from 'emailjs-com';
import { phoneNumber } from '@/constants/contactInfo';
// import { publicKey, serviceID, templateID } from '@/constants/mailApiData';
import { NotificationModal } from './NotificationModal';
import styles from './Contacts.module.css';

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // TEMPORARILY DISABLED: Email sending disabled due to spam issues
    setShowNotification(true);

    // try {
    //   await emailjs.send(serviceID, templateID, formData, publicKey);
    //   setFormData({ name: '', email: '', phone: '', message: '' });
    // } catch (error) {
    //   console.error('Error sending email:', error);
    //   setShowNotification(true);
    // }
  };

  return (
    <>
      <NotificationModal
        isOpen={showNotification}
        onClose={() => setShowNotification(false)}
        title="Contact Form Temporarily Disabled"
      >
        <p>
          Please reach out via email directly at{' '}
          <a href="mailto:info@gvnpro.com" className={styles.emailLink}>
            info@gvnpro.com
          </a>
        </p>
      </NotificationModal>
      <section id="contacts" className={styles.contactContainer}>
        <div className={styles.formContainer}>
          <h4 className={styles.subtitle}>Get in touch</h4>
          <h2 className={styles.title}>{"We'd love to hear from you!"}</h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label className={styles.formLabel}>
              Name *
              <input
                required={true}
                type="text"
                name="name"
                placeholder="Jane Smith"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label className={styles.formLabel}>
              Email address *
              <input
                required={true}
                type="email"
                name="email"
                placeholder="email@example.com"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className={styles.formLabel}>
              Phone number
              <input
                type="tel"
                name="phone"
                placeholder="093-333-333"
                className={styles.input}
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label className={styles.formLabel}>
              Message
              <textarea
                name="message"
                placeholder=""
                className={styles.textarea}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </label>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.contactDetails}>
            <h4>Get in touch</h4>
            <p>
              <strong>Mail:</strong>{' '}
              <a href="mailto:info@gvn.com">info@gvnpro.com</a>
            </p>
            <p>
              <strong>Location:</strong> <label>Yerevan, Ye, AM</label>
            </p>
            <p>{phoneNumber}</p>
            <h4>Hours</h4>
            <p>Monday - Saturday: 10:00am - 19:00pm</p>
          </div>
        </div>
      </section>
    </>
  );
};
