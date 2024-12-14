import { useFetchParams } from '@/app/hooks/useFetchParams';
import { EnumGenres } from '@/common/enums/EnumGenres';
import { TMovieByList, TResponseArray } from '@/common/types/response';
import axios from '@/lib/axios/axios';
import { useInfiniteQuery } from 'react-query';

const useInfiniteMovies = () => {
  const { params } = useFetchParams({ page: 1, sort_by: EnumGenres.POPULARITY_DESC });

  return useInfiniteQuery({
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
