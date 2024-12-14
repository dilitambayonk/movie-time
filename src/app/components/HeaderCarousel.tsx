import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useState } from 'react';

const HeaderCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="overflow-hidden pb-10 pt-20">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="mx-auto w-full max-w-xl"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className={cn(currentSlide === index ? 'opacity-100' : 'opacity-50')}
            >
              <div className="p-1">
                <Card className="flex h-[324px] rounded border-none">
                  <div className="relative h-full w-[243px] scale-110">
                    <Image
                      src="https://picsum.photos/400/300"
                      alt="img-carousel"
                      sizes="100vw"
                      className="h-auto w-full object-cover"
                      fill
                    />
                  </div>
                  <CardContent className="ml-3 flex-1 space-y-1 p-4">
                    <div className="flex items-center gap-x-0.5">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.84818 2.13274C8.19526 1.32678 9.338 1.32678 9.68509 2.13274L10.7225 4.54183C10.8673 4.87801 11.1842 5.10823 11.5487 5.14203L14.1604 5.38427C15.0342 5.46531 15.3873 6.55212 14.7281 7.13127L12.7575 8.86241C12.4825 9.10398 12.3615 9.47648 12.4419 9.83355L13.0186 12.3924C13.2116 13.2484 12.2871 13.9201 11.5325 13.4721L9.27719 12.1329C8.96247 11.946 8.5708 11.946 8.25607 12.1329L6.00072 13.4721C5.24619 13.9201 4.32169 13.2484 4.51463 12.3924L5.09133 9.83355C5.17181 9.47648 5.05077 9.10398 4.77579 8.86241L2.8052 7.13127C2.14594 6.55212 2.49906 5.46531 3.37284 5.38427L5.98461 5.14203C6.34907 5.10823 6.66594 4.87801 6.81072 4.54183L7.84818 2.13274Z"
                          fill="#FFB802"
                        />
                      </svg>
                      <span className="ml-1 text-lg font-semibold">4.5</span>
                    </div>
                    <div className="text-[28px]">Space Sweepers</div>
                    <div className="flex items-center gap-x-2">
                      2021
                      <div className="h-[6.7px] w-[6.5px] rounded-full bg-white/50" />
                      Sci-Fi
                    </div>
                    <div className="text-xs">
                      When the crew of a space junk collector ship called The Victory discovers a
                      humanoid robot named Dorothy that&apos;s known to be a weapon of mass
                      destruction, they get involved in a risky business deal which puts their lives
                      at stake.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="mt-16" currentActive={setCurrentSlide} />
      </Carousel>
    </div>
  );
};

export default HeaderCarousel;
