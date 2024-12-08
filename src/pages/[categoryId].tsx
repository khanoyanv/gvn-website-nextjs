import React from "react";
import { useRouter } from "next/router";

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

const categoryData = {
  "dslr-camera": {
    title: "Professional DSLR Camera",
    subtitle: "Capture stunning images with top-notch features.",
    description:
      "This professional DSLR camera offers advanced features that cater to photographers of all levels.",
    images: ["/camera.jpg", "/camera.jpg", "/camera.jpg"],
    features: [
      "24.2 MP resolution for high-quality photos",
      "4K video recording capabilities",
      "Built-in Wi-Fi and Bluetooth connectivity",
    ],
  },
  tripod: {
    title: "Heavy-Duty Tripod",
    subtitle: "Experience unmatched stability with our Heavy-Duty Tripod.",
    description: "This tripod offers unmatched stability and durability.",
    images: ["/tripod.jpg", "/tripod.jpg", "/tripod.jpg"],
    features: ["Sturdy aluminum build", "360-degree pan head"],
  },
  "led-light-kit": {
    title: "LED Video Light Kit",
    subtitle: "Brighten your projects with our LED Video Light Kit.",
    description:
      "A premium LED video light kit designed for videographers and photographers.",
    images: ["/light-kit.jpg", "/light-kit.jpg", "/light-kit.jpg"],
    features: [
      "Adjustable brightness levels",
      "Compact and portable design",
      "Includes multiple color filters",
    ],
  },
};

const CategoryPage: React.FC<ProductDetailsProps> = () => {
  const { query } = useRouter();
  const { categoryId } = query;

  if (!categoryId || typeof categoryId !== "string") {
    return (
      <div className={"notFound"}>
        <h2>Loading...</h2>
      </div>
    );
  }

  const category = categoryData[categoryId];

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
        <img
          src={category.images[0]}
          alt={category.title}
          className={"mainImage"}
        />
        <div className={"thumbnailContainer"}>
          {category.images.slice(1).map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt={`${category.title} ${index + 1}`}
              className={"thumbnail"}
            />
          ))}
        </div>
      </div>

      <div className={"infoContainer"}>
        <h2>Product Information</h2>
        <p>{category.description}</p>
        <ul className={"featuresList"}>
          {category.features.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoryPage;
