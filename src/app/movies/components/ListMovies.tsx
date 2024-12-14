'use client';

import CardMovie from '@/components/CardMovie';
import Loader from '@/components/Loader';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import useInfiniteMovies from '../hooks/useInfiniteMovies';
import { useFetchParams } from '@/app/hooks/useFetchParams';
import { useEffect } from 'react';

const ListMovies = () => {
  const { params, setParams } = useFetchParams({});
  const query = useInfiniteMovies({ page: 1 });

  useEffect(() => {
    if (query.isFetchingNextPage) {
      setParams({ page: Number(params.page) + 1 });
    }
  }, [query.data, query.isFetchingNextPage]);

  const handleNextPage = () => {
    query.fetchNextPage();
  };

  return (
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
  );
};

export default ListMovies;
