'use client';

import CardMovie from '@/components/CardMovie';
import { usePopularMovie } from '../hooks/usePopularMovie';

const RecomendationMovies = () => {
  const query = usePopularMovie();

  return (
    <div className="container py-10">
      <div className="font-semibold">RECOMMENDATION MOVIES</div>
      <div className="mt-6 grid grid-cols-5 gap-6">
        {query.data?.results.map(movie => <CardMovie key={movie.id} data={movie} />)}
      </div>
    </div>
  );
};

export default RecomendationMovies;
