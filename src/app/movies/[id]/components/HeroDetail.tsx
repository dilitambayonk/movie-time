'use client';

import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { useDetailMovie } from '../hooks/useDetailMovie';
import Loader from '@/components/Loader';
import { getDate, getImageUrl } from '@/lib/utils';
import { CONFIGS } from '@/lib/configs';

const HeroDetail = () => {
  const query = useDetailMovie();

  if (query.isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="relative h-[440px] w-screen overflow-hidden">
        <Image
          src={getImageUrl(query.data?.backdrop_path || '')}
          alt={'hero-' + query.data?.title || ''}
          sizes="100vw"
          className="h-auto w-full object-cover opacity-20"
          placeholder="blur"
          blurDataURL={CONFIGS.site.imageDataBlur}
          fill
        />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container mb-10 space-y-1 pl-[250px]">
            <div className="text-lg font-medium">
              {getDate(query.data?.release_date || '').year}
            </div>
            <h1 className="text-4xl font-semibold">{query.data?.original_title}</h1>
            <div className="text-sm font-medium">
              {query.data?.genres.map(item => item.name).join(', ')}
            </div>
          </div>
          <div className="h-20 bg-black/50">
            <div className="container flex h-full items-center gap-x-6 py-4 pl-[250px]">
              <div className="flex items-center gap-x-4">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0815 1.13274C13.4286 0.326776 14.5714 0.326779 14.9185 1.13274L18.0912 8.50027C18.236 8.83645 18.5529 9.06667 18.9173 9.10047L26.9047 9.84128C27.7785 9.92232 28.1316 11.0091 27.4724 11.5883L21.4459 16.8825C21.1709 17.124 21.0499 17.4966 21.1303 17.8536L22.894 25.679C23.087 26.535 22.1625 27.2067 21.4079 26.7587L14.5106 22.6632C14.1958 22.4763 13.8042 22.4763 13.4894 22.6632L6.59208 26.7587C5.83755 27.2067 4.91305 26.535 5.10599 25.679L6.86967 17.8536C6.95015 17.4965 6.82911 17.124 6.55413 16.8825L0.527634 11.5883C-0.131628 11.0091 0.2215 9.92232 1.09527 9.84128L9.08266 9.10047C9.44711 9.06667 9.76399 8.83645 9.90876 8.50027L13.0815 1.13274Z"
                    fill="#FFB802"
                  />
                </svg>
                <span className="text-4xl font-semibold">{query.data?.vote_average}</span>
                <div className="space-y-1 uppercase">
                  <div className="text-xs font-medium text-white/50">User Score</div>
                  <div className="text-xs font-medium">{query.data?.vote_count} Votes</div>
                </div>
              </div>
              <Separator orientation="vertical" className="bg-white/20" />
              <div className="space-y-1 uppercase">
                <div className="text-xs font-medium text-white/50">Status</div>
                <div className="text-xs font-medium">{query.data?.status}</div>
              </div>
              <Separator orientation="vertical" className="bg-white/20" />
              <div className="space-y-1 uppercase">
                <div className="text-xs font-medium text-white/50">Language</div>
                <div className="text-xs font-medium">{query.data?.spoken_languages[0].name}</div>
              </div>
              <Separator orientation="vertical" className="bg-white/20" />
              <div className="space-y-1 uppercase">
                <div className="text-xs font-medium text-white/50">Budget</div>
                <div className="text-xs font-medium">
                  ${query.data?.budget.toLocaleString('ID')}
                </div>
              </div>
              <Separator orientation="vertical" className="bg-white/20" />
              <div className="space-y-1 uppercase">
                <div className="text-xs font-medium text-white/50">Production</div>
                <div className="text-xs font-medium">
                  {query.data?.production_companies[0].name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-8 text-black">
        <div className="container relative left-0">
          <div className="absolute bottom-0 h-[330px] w-[220px] overflow-hidden">
            <Image
              src={getImageUrl(query.data?.poster_path || '')}
              alt={'poster-' + query.data?.title || ''}
              sizes="100vw"
              className="h-auto w-full object-cover"
              placeholder="blur"
              blurDataURL={CONFIGS.site.imageDataBlur}
              fill
            />
          </div>
          <div className="space-y-2 pl-[250px]">
            <div className="font-semibold text-red-accent">OVERVIEW</div>
            <div className="max-w-2xl leading-relaxed">{query.data?.overview}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroDetail;
