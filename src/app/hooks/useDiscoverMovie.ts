import { TMovieByList, TResponseArray } from '@/common/types/response';
import axios from '@/lib/axios/axios';
import { useQuery } from 'react-query';
import { useFetchParams } from './useFetchParams';

export const useDiscoverMovie = () => {
  const params = useFetchParams({ page: 1, sort_by: 'popularity.desc' });

  const dataQuery = useQuery({
    queryKey: ['discover-movie', params],
    queryFn: async () => {
      const response = await axios.get<TResponseArray<TMovieByList>>('/discover/movie', {
        params,
      });
      return response.data;
    },
  });

  return dataQuery;
};
