'use client';

import CardMovie from '@/components/CardMovie';
import Loader from '@/components/Loader';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import useInfiniteMovies from '../hooks/useInfiniteMovies';
import FilterMovies from './FilterMovies';

const ListMovies = () => {
  const query = useInfiniteMovies();

  const handleNextPage = () => {
    query.fetchNextPage();
  };

  return (
    <div className="mt-20 flex gap-x-8">
      <FilterMovies refetch={query.refetch} />
      <div className="w-full">
        {query.data?.pages.map((page, index) => (
          <div key={index} className="grid grid-cols-4 gap-6">
            {page.results.map(movie => (
              <CardMovie key={movie.id} data={movie} />
            ))}
          </div>
        ))}
        {query.hasNextPage && (
          <div className="mt-10 text-center">
            <Button
              variant="red"
              className="mx-auto px-8"
              onClick={handleNextPage}
              disabled={query.isFetchingNextPage}
            >
              {query.isFetchingNextPage && <LoaderCircle className="animate-spin" />}
              Load More
            </Button>
          </div>
        )}
        {query.isLoading && <Loader className="w-full" />}
      </div>
    </div>
  );
};

export default ListMovies;
