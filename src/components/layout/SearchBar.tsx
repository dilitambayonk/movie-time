import { Search } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { useSearchMovie } from '@/app/hooks/useSearchMovie';
import Link from 'next/link';

const SearchBar = () => {
  const [querySearch, setQuerySearch] = useState('');

  const query = useSearchMovie({ query: querySearch });

  useEffect(() => {
    const timeout = setTimeout(() => {
      query.refetch();
    }, 500);
    return () => clearTimeout(timeout);
  }, [querySearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(e.target.value);
  };

  return (
    <div className="flex-1">
      <div className="flex h-9 items-center rounded bg-black/10 px-2">
        <Image src="/icon-movie.svg" alt="icon-movie" width={24} height={24} priority />
        <Input
          className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Find Movie"
          value={querySearch}
          onChange={handleChange}
        />
        <Search size={16} />
      </div>
      <div className="relative">
        {!!query.data && (
          <div className="absolute inset-x-0 top-0 mt-1 rounded bg-black">
            {query.data.results.map(movie => (
              <Link key={movie.id} href={`/movies/${movie.id}`} onClick={() => setQuerySearch('')}>
                <div className="px-3 py-1 hover:bg-white/20">{movie.title}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
