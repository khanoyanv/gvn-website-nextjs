import React from "react";

export const About = () => {
  return (
    <section id={"about"} className={"aboutContainer"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className={"title"}>About Us</h2>
        <p
          className={"description"}
          style={{ color: "#1f509a", fontSize: "24px" }}
        >
          GVN PRO company was founded in 2019 and is actively operating in
          Yerevan, it specializes in professional audio, photo and video, media
          equipment supply and sales. The company cooperates with the leading
          companies, manufacturers, offers and supports such brands as Sony,
          Panasonic, Samsung, Canon, Manfrotto, Libec, DJI, Blackmagic,
          Sennheiser, Aja, Canare, Neutrik etc. The GVN PRO is the supplier for
          the leading broadcast and media companies in Armenia.
        </p>
      </div>
      {/* <div className={"imageContainer"}>
        <img src="/tools.jpg" alt="Photography gear" className={"image"} />
      </div> */}
    </section>
  );
};
