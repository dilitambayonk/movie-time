import Image from 'next/image';

const HeroDetail = () => {
  return (
    <div>
      <div className="relative h-[440px] w-screen overflow-hidden">
        <Image
          src="https://picsum.photos/1000/800"
          alt="img-carousel"
          sizes="100vw"
          className="h-auto w-full object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default HeroDetail;
