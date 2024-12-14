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
import { itemsGenres } from '@/app/constants/genres';

const FilterMovies = () => {
  return (
    <div className="flex-1">
      <Card className="from-dark w-60 border-none bg-gradient-to-b to-background">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Sort Result By</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="p-6">
          <Select>
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
            {itemsGenres.map(genre => (
              <div key={genre.id} className="items-top flex justify-between space-x-2">
                <label htmlFor={`genre-${genre.id}`} className="text-sm font-medium">
                  {genre.name}
                </label>
                <Checkbox id={`genre-${genre.id}`} className="border-white/50 bg-white/20" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterMovies;
