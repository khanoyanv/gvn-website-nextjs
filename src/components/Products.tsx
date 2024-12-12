import React from "react";
import { CategoryCard } from "./CategoryCard";
import { CARDS_DATA } from "@/constants/data";

export const Products: React.FC = () => {
  return (
    <section id={"products"} className={"section"}>
      <div className={"header"}>
        <h4 className={"subtitle"}>Essential Gear for Creators</h4>
        <h2 className={"title"}>Elevate your photography and videography</h2>
      </div>
      <div className={"cardsContainer"}>
        {CARDS_DATA.map((card, index) => (
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
