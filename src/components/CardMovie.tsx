import Image from 'next/image';
import { Button } from './ui/button';

const CardMovie = () => {
  return (
    <div className="group relative">
      <div className="relative h-[330px] w-[220px] overflow-hidden">
        <Image
          src="https://picsum.photos/400/300"
          alt="img-carousel"
          sizes="100vw"
          className="h-auto w-full object-cover"
          fill
        />
        <div className="duration-50 absolute inset-0 z-10 grid translate-y-full place-content-center bg-black/80 transition ease-in-out group-hover:-translate-y-0">
          <div className="space-y-10 text-center">
            <div className="flex items-center justify-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0815 2.13274C15.4286 1.32678 16.5714 1.32678 16.9185 2.13274L20.0912 9.50027C20.236 9.83645 20.5529 10.0667 20.9173 10.1005L28.9047 10.8413C29.7785 10.9223 30.1316 12.0091 29.4724 12.5883L23.4459 17.8825C23.1709 18.124 23.0499 18.4966 23.1303 18.8536L24.894 26.679C25.087 27.535 24.1625 28.2067 23.4079 27.7587L16.5106 23.6632C16.1958 23.4763 15.8042 23.4763 15.4894 23.6632L8.59208 27.7587C7.83755 28.2067 6.91305 27.535 7.10599 26.679L8.86967 18.8536C8.95015 18.4965 8.82911 18.124 8.55413 17.8825L2.52763 12.5883C1.86837 12.0091 2.2215 10.9223 3.09527 10.8413L11.0827 10.1005C11.4471 10.0667 11.764 9.83645 11.9088 9.50027L15.0815 2.13274Z"
                  fill="#FFB802"
                />
              </svg>
              <span className="text-2xl font-semibold">6.5</span>
            </div>
            <div className="text-lg font-semibold">Action</div>
            <Button variant="red" className="px-10">
              VIEW
            </Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-8 w-12 bg-[#1E232BCC] text-center text-lg font-bold group-hover:hidden">
          7.0
        </div>
      </div>
      <div className="mt-2">
        <div className="font-semibold">Wonder Woman 1984</div>
        <div className="text-sm text-secondary">2020</div>
      </div>
    </div>
  );
};

export default CardMovie;
