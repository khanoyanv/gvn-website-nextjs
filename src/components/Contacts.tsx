import React, { useState } from "react";
import emailjs from "emailjs-com";
import { phoneNumber } from "@/constants/contactInfo";
import { publicKey, serviceID, templateID } from "@/constants/mailApiData";

export const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <section id={"contacts"} className={"contactContainer"}>
      <div className={"formContainer"}>
        <h4 className={"subtitle"}>Get in touch</h4>
        <h2 className={"title"}>{"We'd love to hear from you!"}</h2>
        <form className={"contactForm"} onSubmit={handleSubmit}>
          <label className={"formLabel"}>
            Name *
            <input
              type="text"
              name="name"
              placeholder="Jane Smith"
              className={"input"}
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className={"formLabel"}>
            Email address *
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              className={"input"}
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className={"formLabel"}>
            Phone number *
            <input
              type="tel"
              name="phone"
              placeholder="093-333-333"
              className={"input"}
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label className={"formLabel"}>
            Message
            <textarea
              name="message"
              placeholder=""
              className={"textarea"}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <button type="submit" className={"submitButton"}>
            Submit
          </button>
        </form>
      </div>
      <div className={"infoContainer"}>
        <div className={"contactDetails"}>
          <h4>Get in touch</h4>
          <p>
            <strong>Mail:</strong>{" "}
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
  );
};
