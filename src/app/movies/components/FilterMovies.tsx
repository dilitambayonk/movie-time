'use client';

import { useFetchParams } from '@/app/hooks/useFetchParams';
import { useGenres } from '@/app/hooks/useGenres';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { optionsPopularity } from '../constants/options';
import { useEffect, useState } from 'react';

interface FilterMoviesProps {
  refetch?: () => void;
}

const FilterMovies = ({ refetch }: FilterMoviesProps) => {
  const { params, setParams } = useFetchParams({});
  const query = useGenres();

  const [listGenres, setListGenres] = useState<string[]>([]);

  useEffect(() => {
    if (listGenres.length > 0) {
      setParams({ with_genres: listGenres.join(','), page: 1 });
    } else {
      setParams({ with_genres: '', page: 1 });
    }
    refetch?.();
  }, [listGenres]);

  const handleSortBy = (sortBy: string) => {
    setParams({ sort_by: sortBy, page: 1 });
    refetch?.();
  };

  const handleChangeGenre = (genre: string) => {
    if (listGenres.includes(genre)) {
      setListGenres(listGenres.filter(item => item !== genre));
    } else {
      setListGenres([...listGenres, genre]);
    }
  };

  return (
    <div className="flex-1">
      <Card className="from-dark w-60 border-none bg-gradient-to-b to-background">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Sort Result By</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="p-6">
          <Select defaultValue={params.sort_by} onValueChange={handleSortBy}>
            <SelectTrigger className="w-full border-none">
              <SelectValue placeholder="Popularity" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {optionsPopularity.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardContent>
        <Separator />
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Genres</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="p-6">
          <div className="space-y-4">
            {query.data?.genres.map(genre => (
              <div key={genre.id} className="items-top flex justify-between space-x-2">
                <label htmlFor={`genre-${genre.id}`} className="text-sm font-medium">
                  {genre.name}
                </label>
                <Checkbox
                  id={`genre-${genre.id}`}
                  className="border-white/50 bg-white/20"
                  onClick={() => handleChangeGenre(genre.name)}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterMovies;
