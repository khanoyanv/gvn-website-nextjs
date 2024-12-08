import React from "react";

export const Contacts: React.FC = () => {
  const handleSubmit = () => {
    alert("handling logic will be added");
  };
  return (
    <section id={"contacts"} className={"contactContainer"}>
      <div className={"formContainer"}>
        <h4 className={"subtitle"}>Get in touch</h4>
        <h2 className={"title"}>{"We'd love to hear from you!"}</h2>
        <form className={"contactForm"} onSubmit={handleSubmit}>
          <label className={"formLabel"}>
            Name *
            <input type="text" placeholder="Jane Smith" className={"input"} />
          </label>
          <label className={"formLabel"}>
            Email address *
            <input
              type="email"
              placeholder="email@example.com"
              className={"input"}
            />
          </label>
          <label className={"formLabel"}>
            Phone number *
            <input type="tel" placeholder="093-333-333" className={"input"} />
          </label>
          <label className={"formLabel"}>
            Message
            <textarea placeholder="" className={"textarea"}></textarea>
          </label>
          <label className={"checkboxContainer"}>
            <input type="checkbox" className={"checkbox"} />
            <span>
              I allow this website to store my submission so they can respond to
              my inquiry. *
            </span>
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
            📧 <a href="mailto:info@gvn.com">info@gvnpro.com</a>
          </p>
          <p>📍 Yerevan, Ye, AM</p>
          <p>{`+(374) 44 201 788`}</p>
          <h4>Hours</h4>
          <p>Monday - Saturday: 10:00am - 20:00pm</p>
          <p>Sunday: 13:00pm - 18:00pm</p>
        </div>
      </div>
    </section>
  );
};
