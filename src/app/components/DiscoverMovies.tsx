'use client';

import CardMovie from '@/components/CardMovie';
import { Button } from '@/components/ui/button';
import { useDiscoverMovie } from '../hooks/useDiscoverMovie';
import Loader from '@/components/Loader';
import { useFetchParams } from '../hooks/useFetchParams';
import { EnumGenres } from '@/common/enums/EnumGenres';

const DiscoverMovies = () => {
  const { params, setParams } = useFetchParams({});
  const query = useDiscoverMovie();

  const handleSortBy = (sortBy: string) => {
    setParams({ sort_by: sortBy });
    query.refetch();
  };

  return (
    <div className="relative pt-20">
      <div className="absolute inset-x-0 top-0 z-0 h-[333px] bg-white/5" />
      <div className="container relative z-10">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <div className="h-1.5 w-28 bg-red-accent" />
            <h3 className="text-2xl font-semibold">Discover Movies</h3>
          </div>
          <div className="space-x-4">
            <Button
              className="hover:cursor-pointer"
              variant={params.sort_by === EnumGenres.POPULARITY_ASC ? 'red' : 'default'}
              onClick={() => handleSortBy(EnumGenres.POPULARITY_ASC)}
            >
              Popularity
            </Button>
            <Button
              className="hover:cursor-pointer"
              variant={params.sort_by === EnumGenres.RELEASE_DATE_DESC ? 'red' : 'default'}
              onClick={() => handleSortBy(EnumGenres.RELEASE_DATE_DESC)}
            >
              Release Date
            </Button>
          </div>
        </div>
        {query.data && (
          <div className="mt-10 grid grid-cols-5 gap-6">
            {query.data.results.map((item, index) => (
              <CardMovie key={index} data={item} />
            ))}
          </div>
        )}
        {query.isLoading && <Loader />}
      </div>
    </div>
  );
};

export default DiscoverMovies;
