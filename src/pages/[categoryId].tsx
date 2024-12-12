/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { CATEGORY_DATA } from "@/constants/data";

interface ProductDetailsProps {
  categoryData: {
    [key: string]: {
      title: string;
      subtitle: string;
      description: string;
      images: string[];
      features: string[];
    };
  };
}

const CategoryPage: React.FC<ProductDetailsProps> = () => {
  const { query } = useRouter();
  const { categoryId } = query;
  const category = CATEGORY_DATA[categoryId];

  const [mainImage, setMainImage] = useState<string>(category?.images[0] || "");

  if (!categoryId || typeof categoryId !== "string") {
    return (
      <div className={"notFound"}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!category) {
    return (
      <div className={"notFound"}>
        <h2>Category not found</h2>
        <p>The category you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <section className={"productDetailsContainer"}>
      <div className={"header"}>
        <h1 className={"productTitle"}>{category.title}</h1>
        <p className={"productSubtitle"}>{category.subtitle}</p>
      </div>

      <div className={"imagesContainer"}>
        <img src={mainImage} alt={category.title} className={"mainImage"} />
        <div className={"thumbnailContainer"}>
          {category.images.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt={`${category.title} ${index + 1}`}
              className={"thumbnail"}
              onClick={() => setMainImage(image)}
              style={{
                cursor: "pointer",
                border: mainImage === image ? "2px solid #000" : "none",
              }}
            />
          ))}
        </div>
      </div>

      <div className={"infoContainer"}>
        <h2>General Information</h2>
        <p>{category.description}</p>
      </div>
    </section>
  );
};

export default CategoryPage;
