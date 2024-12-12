/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

export const CategoryCard: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  link,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <div className={"card"} onClick={handleClick}>
      <div className={"imageContainer"}>
        <img src={imageUrl} alt={title} className={"image"} />
      </div>
      <div className={"textContainer"}>
        <h3 className={"title"}>{title} &rarr;</h3>
        <p className={"description"}>{description}</p>
      </div>
    </div>
  );
};
