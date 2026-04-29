import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { CATEGORY_DATA } from '@/constants/data';
import { CATEGORY_PAGE } from '@/constants/content';

const CategoryPage = () => {
  const { query } = useRouter();
  const categoryId = Array.isArray(query.categoryId)
    ? query.categoryId[0]
    : query.categoryId;

  const category =
    categoryId && categoryId in CATEGORY_DATA
      ? CATEGORY_DATA[categoryId as keyof typeof CATEGORY_DATA]
      : null;

  const [mainImage, setMainImage] = useState<string>(category?.images[0] || '');

  if (!categoryId || typeof categoryId !== 'string') {
    return (
      <div className="text-center mt-16 p-8 bg-red-100 rounded-lg text-red-800 shadow-md">
        <h2 className="text-3xl font-bold mb-4">{CATEGORY_PAGE.loading}</h2>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="text-center mt-16 p-8 bg-red-100 rounded-lg text-red-800 shadow-md">
        <h2 className="text-3xl font-bold mb-4">{CATEGORY_PAGE.notFound}</h2>
        <p className="text-base">{CATEGORY_PAGE.notFoundDescription}</p>
      </div>
    );
  }

  return (
    <section className="py-16 px-8 max-w-[1200px] mt-20 mx-auto flex flex-col gap-8">
      <div className="text-center mb-8">
        <h1 className="text-(--color-primary) text-2xl font-bold mb-2 mt-0">
          {category.title}
        </h1>
        <p className="text-(--color-secondary) text-xl m-0">
          {category.subtitle}
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Image
          src={mainImage}
          alt={category.title}
          className="w-full max-w-[600px] h-auto rounded-lg shadow-md"
          width={600}
          height={600}
        />
        <div className="flex gap-4 justify-center flex-wrap">
          {category.images.map((image: string) => (
            <Image
              key={`${image}-category-image`}
              src={image}
              alt={`${category.title} category-image`}
              className="w-[100px] h-[100px] rounded object-cover cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-md"
              onClick={() => setMainImage(image)}
              width={100}
              height={100}
              style={{
                border: mainImage === image ? '2px solid #000' : 'none',
              }}
            />
          ))}
        </div>
      </div>

      <div className="bg-[#f9f9f9] p-8 rounded-lg shadow-md leading-relaxed">
        <h2 className="text-xl font-bold mb-4 mt-0">
          {CATEGORY_PAGE.generalInfoHeading}
        </h2>
        <p className="text-base m-0">{category.description}</p>
      </div>
    </section>
  );
};

export default CategoryPage;
