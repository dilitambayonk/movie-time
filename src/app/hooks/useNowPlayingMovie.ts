import { useQuery } from 'react-query';
import axios from '@/lib/axios/axios';
import { TMovieByList, TResponseArray } from '@/common/types/response';
import { useFetchParams } from './useFetchParams';

export const useNowPlayingMovie = () => {
  const params = useFetchParams({ page: 1 });

  const dataQuery = useQuery({
    queryKey: ['now-playing-movie'],
    queryFn: async () => {
      const response = await axios.get<TResponseArray<TMovieByList>>('/movie/now_playing', {
        params,
      });
      return response.data;
    },
  });

  return dataQuery;
};
