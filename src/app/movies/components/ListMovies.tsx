'use client';

import { useDiscoverMovie } from '@/app/hooks/useDiscoverMovie';
import CardMovie from '@/components/CardMovie';
import Loader from '@/components/Loader';

const ListMovies = () => {
  const query = useDiscoverMovie();

  return (
    <>
      {query.data && (
        <div className="grid grid-cols-4 gap-6">
          {query.data?.results.map(movie => <CardMovie key={movie.id} data={movie} />)}
        </div>
      )}
      {query.isLoading && <Loader className="w-full" />}
    </>
  );
};

export default ListMovies;
