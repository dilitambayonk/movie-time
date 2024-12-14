import CardMovie from '@/components/CardMovie';

const RecomendationMovies = () => {
  return (
    <div className="container py-10">
      <div className="font-semibold">RECOMMENDATION MOVIES</div>
      <div className="mt-6 grid grid-cols-5 gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <CardMovie key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecomendationMovies;
