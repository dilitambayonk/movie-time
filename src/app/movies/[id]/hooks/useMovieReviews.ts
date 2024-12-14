import { TMovieReviews, TResponseArray } from '@/common/types/response';
import axios from '@/lib/axios/axios';
import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';

export const useMovieReviews = () => {
  const params = useParams<{ id: string }>();

  const dataQuery = useQuery({
    queryKey: ['movie-review', params.id],
    queryFn: async () => {
      const response = await axios.get<TResponseArray<TMovieReviews>>(
        `/movie/${params.id}/reviews`
      );
      return response.data;
    },
  });

  return dataQuery;
};
