import CardMovie from '@/components/CardMovie';

const ListMovies = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <CardMovie key={index} />
      ))}
    </div>
  );
};

export default ListMovies;
