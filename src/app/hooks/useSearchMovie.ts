import { TParams } from '@/common/types/request';
import { TMovieByList, TResponseArray } from '@/common/types/response';
import axios from '@/lib/axios/axios';
import { useQuery } from 'react-query';

export const useSearchMovie = (params: TParams) => {
  const dataQuery = useQuery({
    queryKey: ['discover-movie', params],
    queryFn: async () => {
      const response = await axios.get<TResponseArray<TMovieByList>>('/search/movie', {
        params,
      });
      return response.data;
    },
    enabled: false,
  });

  return dataQuery;
};
