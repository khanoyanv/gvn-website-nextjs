/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';

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
    <div 
      className="flex flex-col w-[280px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl" 
      onClick={handleClick}
    >
      <div className="w-full h-[180px] overflow-hidden flex justify-center items-center bg-[#f5f5f5]">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-3">
        <h3 className="text-base font-bold mb-2 text-(--color-secondary) transition-colors hover:text-(--color-primary)">{title} &rarr;</h3>
        <p className="text-sm text-[#666]">{description}</p>
      </div>
    </div>
  );
};
