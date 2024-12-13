import React from "react";
import { useRouter } from "next/router";

export const Hero: React.FC = () => {
  const router = useRouter();

  const handleViewProducts = () => {
    router.push("#products");
  };
  return (
    <section id={"home"} className={"heroContainer"}>
      <div className={"heroImageContainer"} />
      <div className={"heroInfoContainer"}>
        <h1>Capture Your Vision</h1>
        <p>Elevate your photography with premium gear</p>
        <button className={"heroButton"} onClick={handleViewProducts}>
          View Products
        </button>
      </div>
    </section>
  );
};
