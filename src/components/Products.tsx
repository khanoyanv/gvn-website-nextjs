import React from "react";
import { CategoryCard } from "./CategoryCard";

const cardsData = [
  {
    imageUrl: "/camera.jpg",
    title: "Professional DSLR camera",
    description: "Capture stunning images with our Professional DSLR Camera.",
    link: "/dslr-camera",
  },
  {
    imageUrl: "/tripod.jpg",
    title: "Heavy-Duty tripod",
    description: "Experience unmatched stability with our Heavy-Duty Tripod.",
    link: "/tripod",
  },
  {
    imageUrl: "/light-kit.jpg",
    title: "LED video light kit",
    description: "Brighten your projects with our LED Video Light Kit.",
    link: "/led-light-kit",
  },
];

export const Products: React.FC = () => {
  return (
    <section id={"products"} className={"section"}>
      <div className={"header"}>
        <h4 className={"subtitle"}>Essential Gear for Creators</h4>
        <h2 className={"title"}>Elevate your photography and videography</h2>
      </div>
      <div className={"cardsContainer"}>
        {cardsData.map((card, index) => (
          <CategoryCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
};
