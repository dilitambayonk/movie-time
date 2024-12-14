import { TMovieByDetail } from '@/common/types/response';
import axios from '@/lib/axios/axios';
import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';

export const useDetailMovie = () => {
  const params = useParams<{ id: string }>();

  const dataQuery = useQuery({
    queryKey: ['detail-movie', params.id],
    queryFn: async () => {
      const response = await axios.get<TMovieByDetail>(`/movie/${params.id}`);
      return response.data;
    },
  });

  return dataQuery;
};
