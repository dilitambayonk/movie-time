import { TMovieByList, TResponseArray } from '@/common/types/response';
import axios from '@/lib/axios/axios';
import { useQuery } from 'react-query';
import { useFetchParams } from './useFetchParams';
import { EnumGenres } from '@/common/enums/EnumGenres';

export const useDiscoverMovie = () => {
  const { params } = useFetchParams({ page: 1, sort_by: EnumGenres.POPULARITY_DESC });

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
