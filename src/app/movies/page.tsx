import ListMovies from './components/ListMovies';

const MoviesPage = () => {
  return (
    <div className="relative py-20">
      <div className="absolute inset-x-0 top-[66px] h-[333px] bg-white/5" />
      <div className="container relative z-10 pt-10">
        <div className="space-y-2">
          <div className="h-1.5 w-28 bg-red-accent" />
          <h3 className="text-4xl font-semibold">Movies</h3>
        </div>
        <ListMovies />
      </div>
    </div>
  );
};

export default MoviesPage;
