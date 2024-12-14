import CardMovie from '@/components/CardMovie';
import { Button } from '@/components/ui/button';

const DiscoverMovies = () => {
  return (
    <div className="relative pt-20">
      <div className="absolute inset-x-0 top-0 h-[333px] bg-white/5" />
      <div className="container">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <div className="h-1.5 w-28 bg-red-accent" />
            <h3 className="text-2xl font-semibold">Discover Movies</h3>
          </div>
          <div className="space-x-4">
            <Button variant="red">Popularity</Button>
            <Button>Release Date</Button>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <CardMovie key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverMovies;
