import CategoryCard from '../CategoryCard';
import { CARDS_DATA } from '@/constants/data';
import { HEADING, TAGLINE } from './consts/content';

const Products = () => {
  return (
    <section id="products" className="py-16 px-8 bg-[#f5f5f5]">
      <div className="mb-8 text-center text-(--color-muted)">
        <h4 className="text-(--color-primary) mb-2 uppercase text-base font-bold">
          {TAGLINE}
        </h4>
        <h2 className="text-2xl font-bold leading-[1.3] m-0">{HEADING}</h2>
      </div>
      <div className="flex justify-center flex-wrap gap-4 md:gap-22">
        {CARDS_DATA.map((card) => (
          <CategoryCard
            key={card.title}
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

export default Products;
