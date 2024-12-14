import { TMovieByList, TResponseArray } from '@/common/types/response';
import axios from '@/lib/axios/axios';
import { useQuery } from 'react-query';

export const usePopularMovie = () => {
  const dataQuery = useQuery({
    queryKey: ['popular-movie'],
    queryFn: async () => {
      const response = await axios.get<TResponseArray<TMovieByList>>('/movie/popular');
      return response.data;
    },
  });

  return dataQuery;
};
