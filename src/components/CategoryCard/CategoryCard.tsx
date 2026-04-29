import { useRouter } from 'next/router';
import Image from 'next/image';

import { ARROW_SYMBOL } from './consts/content';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const CategoryCard = ({ imageUrl, title, description, link }: CardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex flex-col w-[280px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl text-left p-0 border-0"
    >
      <div className="w-full h-[180px] overflow-hidden flex justify-center items-center bg-[#f5f5f5] relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="280px"
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="text-base font-bold mb-2 text-(--color-secondary) transition-colors hover:text-(--color-primary)">
          {title} {ARROW_SYMBOL}
        </h3>
        <p className="text-sm text-[#666]">{description}</p>
      </div>
    </button>
  );
};

export default CategoryCard;
