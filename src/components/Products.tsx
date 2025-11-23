import React from "react";
import { CategoryCard } from "./CategoryCard";
import { CARDS_DATA } from "@/constants/data";

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-16 px-8 bg-[#f5f5f5]">
      <div className="mb-8 text-center text-(--color-muted)">
        <h4 className="text-(--color-primary) mb-2 uppercase text-base font-bold">Essential Gear for Creators</h4>
        <h2 className="text-2xl font-bold leading-[1.3] m-0">Elevate your photography and videography</h2>
      </div>
      <div className="flex justify-center flex-wrap gap-4 md:gap-[5.5rem]">
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
