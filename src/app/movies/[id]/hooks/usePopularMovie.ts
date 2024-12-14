import { useQuery } from 'react-query';
import axios from '@/lib/axios/axios';
import { TMovieByList, TResponseArray } from '@/common/types/response';
import { useFetchParams } from '@/app/hooks/useFetchParams';

export const usePopularMovie = () => {
  const params = useFetchParams({ page: 1 });

  const dataQuery = useQuery({
    queryKey: ['popular-movie'],
    queryFn: async () => {
      const response = await axios.get<TResponseArray<TMovieByList>>('/movie/popular', {
        params,
      });
      return response.data;
    },
  });

  return dataQuery;
};
