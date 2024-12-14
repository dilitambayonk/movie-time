import { TParams } from '@/common/types/request';
import { TMovieByList, TResponseArray } from '@/common/types/response';
import axios from '@/lib/axios/axios';
import { useInfiniteQuery } from 'react-query';

const useInfiniteMovies = (params: TParams) => {
  return useInfiniteQuery<TResponseArray<TMovieByList>, Error>({
    queryKey: ['infinite-movies', params],
    queryFn: async ({ pageParam }) => {
      const response = await axios.get<TResponseArray<TMovieByList>>('/discover/movie', {
        params: { ...params, page: pageParam },
      });
      return response.data;
    },

    getNextPageParam(lastPage, allPages) {
      return lastPage.total_pages > 0 ? allPages.length + 1 : undefined;
    },
    enabled: params.sort_by !== undefined,
  });
};

export default useInfiniteMovies;
