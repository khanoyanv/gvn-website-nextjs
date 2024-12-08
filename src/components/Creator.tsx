import React from "react";

export const Creator: React.FC = () => {
  return (
    <section id={"creator"} className={"aboutContainer"}>
      <div className={"textContainer"}>
        <h4 className={"subtitle"}>Empowering Creators</h4>
        <h2 className={"title"}>Your partner in visual excellence</h2>
        <p className={"description"}>
          GVN Pro stands at the forefront of technology in Yerevan, providing
          top-notch cameras, tripods, lights, and accessories tailored for
          professionals in photography, videography, and content creation. Our
          commitment to quality ensures that every creator has the tools they
          need to capture stunning visuals and tell compelling stories. Join us
          in elevating your creative projects with our reliable and innovative
          products.
        </p>
        <a href="#contacts" className={"link"}>
          Get in touch
        </a>
      </div>
      <div className={"imageContainer"}>
        <img src="/tools.jpg" alt="Photography gear" className={"image"} />
      </div>
    </section>
  );
};
