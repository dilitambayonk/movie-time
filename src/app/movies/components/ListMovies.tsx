'use client';

import CardMovie from '@/components/CardMovie';
import Loader from '@/components/Loader';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import useInfiniteMovies from '../hooks/useInfiniteMovies';
import { useFetchParams } from '@/app/hooks/useFetchParams';
import { useEffect } from 'react';
import FilterMovies from './FilterMovies';

const ListMovies = () => {
  const query = useInfiniteMovies({ page: 1 });
  const { params, setParams } = useFetchParams({ page: Number(query.data?.pages.length) });

  console.log(params);

  useEffect(() => {
    if (query.isFetchingNextPage) {
      setParams({ page: Number(query.data?.pages.length) + 1 });
    }
  }, [query.data, query.isFetchingNextPage]);

  useEffect(() => {
    query.refetch();
  }, [params.sort_by]);

  const handleNextPage = () => {
    query.fetchNextPage();
  };

  return (
    <div className="mt-20 flex gap-x-8">
      <FilterMovies params={params} setParams={setParams} />
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
