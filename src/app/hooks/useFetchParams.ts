import { EnumGenres } from '@/common/enums/EnumGenres';
import { TParams } from '@/common/types/request';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useFetchParams = ({
  page = 1,
  sort_by = EnumGenres.POPULARITY_DESC,
}: {
  page?: number;
  sort_by?: string;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const hasPage = searchParams.has('page');
  const pageParams = searchParams.get('page');

  const [params, setParams] = useState<TParams>({
    page: Number(pageParams) || page,
    sort_by,
  });

  useEffect(() => {
    setParams(prev => ({
      ...prev,
      page,
    }));
  }, [page, sort_by]);

  useEffect(() => {
    const url = new URL(window.location.href);
    Object.entries(params).forEach(([key, value]) => {
      if (value === '') {
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, value as string);
      }
    });
    router.replace(url.toString(), { scroll: false });
  }, [params, router]);

  useEffect(() => {
    if (!hasPage) return;
    const newSearchParams = new URLSearchParams(Array.from(searchParams.entries()));
    const newParams: TParams = Object.fromEntries(newSearchParams.entries());
    if (newParams.page) newParams.page = Number(newParams.page);
    setParams(newParams);
  }, [searchParams]);

  return {
    params,
    setParams,
  };
};
