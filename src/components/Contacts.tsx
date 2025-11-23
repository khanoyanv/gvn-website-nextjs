import { ChangeEvent, FormEvent, useState } from 'react';
// import emailjs from 'emailjs-com';
import { phoneNumber } from '@/constants/contactInfo';
// import { publicKey, serviceID, templateID } from '@/constants/mailApiData';
import { NotificationModal } from './NotificationModal';

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
          <a
            href="mailto:info@gvnpro.com"
            className="text-(--color-primary) font-bold"
          >
            info@gvnpro.com
          </a>
        </p>
      </NotificationModal>
      <section
        id="contacts"
        className="flex flex-col md:flex-row items-start justify-between bg-[#e0e0e0] py-16 px-8 gap-8"
      >
        <div className="flex-[2] text-center md:text-left">
          <h4 className="text-base font-bold text-(--color-primary) uppercase mb-4">
            Get in touch
          </h4>
          <h2 className="text-(--color-muted) text-2xl font-bold mb-8 leading-tight">
            {"We'd love to hear from you!"}
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col text-(--color-secondary) text-base">
              Name *
              <input
                required={true}
                type="text"
                name="name"
                placeholder="Jane Smith"
                className="mt-2 p-3 text-base border border-[#ddd] rounded-md outline-none bg-white"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col text-(--color-secondary) text-base">
              Email address *
              <input
                required={true}
                type="email"
                name="email"
                placeholder="email@example.com"
                className="mt-2 p-3 text-base border border-[#ddd] rounded-md outline-none bg-white"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col text-(--color-secondary) text-base">
              Phone number
              <input
                type="tel"
                name="phone"
                placeholder="093-333-333"
                className="mt-2 p-3 text-base border border-[#ddd] rounded-md outline-none bg-white"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col text-(--color-secondary) text-base">
              Message
              <textarea
                name="message"
                placeholder=""
                className="mt-2 p-3 text-base border border-[#ddd] rounded-md outline-none resize-none h-[100px] bg-white"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </label>
            <button
              type="submit"
              className="mt-4 px-6 py-3 text-base bg-white text-(--color-primary) border border-(--color-primary) rounded-md cursor-pointer transition-all hover:text-white hover:bg-(--color-primary)"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center md:items-start flex-1 mt-8 md:mt-16 gap-8 w-full md:w-auto">
          <div className="text-(--color-secondary) text-left pl-0 md:pl-0 pl-[25%]">
            <h4 className="mb-2 font-bold">Get in touch</h4>
            <p className="text-sm text-[#333]">
              <strong>Mail:</strong>{' '}
              <a
                href="mailto:info@gvn.com"
                className="no-underline text-(--color-primary) font-bold"
              >
                info@gvnpro.com
              </a>
            </p>
            <p className="text-sm text-[#333]">
              <strong>Location:</strong> <label>Yerevan, Ye, AM</label>
            </p>
            <p className="text-sm text-[#333]">{phoneNumber}</p>
            <h4 className="mb-2 font-bold mt-4">Hours</h4>
            <p className="text-sm text-[#333]">
              Monday - Saturday: 10:00am - 19:00pm
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
