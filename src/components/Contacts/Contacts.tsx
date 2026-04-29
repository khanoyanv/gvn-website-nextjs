import { ChangeEvent, FormEvent, useState } from 'react';
// import emailjs from 'emailjs-com';
import { gvnproMail, phoneNumber } from '@/constants/contactInfo';
// import { publicKey, serviceID, templateID } from '@/constants/mailApiData';
import NotificationModal from '../NotificationModal';
import {
  FORM_FIELDS,
  HEADING,
  MODAL_CONTENT,
  SIDEBAR,
  SUBMIT_LABEL,
  TAGLINE,
} from './consts/content';

const INPUT_CLASS =
  'mt-2 p-3 text-base border border-[#ddd] rounded-md outline-none bg-white';

const TEXTAREA_CLASS = `${INPUT_CLASS} resize-none h-[100px]`;

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const Contacts = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
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
        title={MODAL_CONTENT.title}
      >
        <p>
          {MODAL_CONTENT.messagePrefix}{' '}
          <a
            href={`mailto:${gvnproMail}`}
            className="text-(--color-primary) font-bold"
          >
            {gvnproMail}
          </a>
        </p>
      </NotificationModal>
      <section
        id="contacts"
        className="flex flex-col md:flex-row items-start justify-between bg-[#e0e0e0] py-16 px-8 gap-8"
      >
        <div className="flex-[2] text-center md:text-left">
          <h4 className="text-base font-bold text-(--color-primary) uppercase mb-4">
            {TAGLINE}
          </h4>
          <h2 className="text-(--color-muted) text-2xl font-bold mb-8 leading-tight">
            {HEADING}
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {FORM_FIELDS.map((field) => (
              <label
                key={field.name}
                className="flex flex-col text-(--color-secondary) text-base"
              >
                {field.label}
                {field.multiline ? (
                  <textarea
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className={TEXTAREA_CLASS}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className={INPUT_CLASS}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                )}
              </label>
            ))}
            <button
              type="submit"
              className="mt-4 px-6 py-3 text-base bg-white text-(--color-primary) border border-(--color-primary) rounded-md cursor-pointer transition-all hover:text-white hover:bg-(--color-primary)"
            >
              {SUBMIT_LABEL}
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center md:items-start flex-1 mt-8 md:mt-16 gap-8 w-full md:w-auto">
          <div className="text-(--color-secondary) text-left pl-0 md:pl-0 pl-[25%]">
            <h4 className="mb-2 font-bold">{SIDEBAR.heading}</h4>
            <p className="text-sm text-[#333]">
              <strong>{SIDEBAR.mailLabel}</strong>{' '}
              <a
                href={`mailto:${gvnproMail}`}
                className="no-underline text-(--color-primary) font-bold"
              >
                {gvnproMail}
              </a>
            </p>
            <p className="text-sm text-[#333]">
              <strong>{SIDEBAR.locationLabel}</strong>{' '}
              <span>{SIDEBAR.location}</span>
            </p>
            <p className="text-sm text-[#333]">{phoneNumber}</p>
            <h4 className="mb-2 font-bold mt-4">{SIDEBAR.hoursHeading}</h4>
            <p className="text-sm text-[#333]">{SIDEBAR.hours}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
