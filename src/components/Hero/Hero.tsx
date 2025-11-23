import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter();

  const handleViewProducts = () => {
    router.push('#products');
  };
  return (
    <section
      id="home"
      className="hidden md:flex items-center justify-center relative overflow-hidden h-screen w-full"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-1"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url("https://cdn.b12.io/client_media/MgJOKVZF/434dfddc-b282-11ef-b9c8-0242ac110002-jpg-hero_image.jpeg")`,
        }}
      />
      <div className="relative flex flex-col items-start text-(--color-light) -ml-[40%] max-w-[600px] p-4 z-2">
        <h1 className="m-0 text-5xl">Capture Your Vision</h1>
        <p className="text-lg">Elevate your photography with premium gear</p>
        <button
          className="bg-(--color-primary) text-white px-6 py-3 text-base border-none rounded-md cursor-pointer transition-colors duration-300 hover:text-(--color-light)"
          onClick={handleViewProducts}
        >
          View Products
        </button>
      </div>
    </section>
  );
};

export default Hero;
