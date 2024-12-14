import { TGenreResponse } from '@/common/types/response';
import axios from '@/lib/axios/axios';
import { useQuery } from 'react-query';

export const useGenres = () => {
  const dataQuery = useQuery({
    queryKey: ['genre-movie'],
    queryFn: async () => {
      const response = await axios.get<TGenreResponse>('/genre/movie/list');
      return response.data;
    },
  });

  return dataQuery;
};
