import { EnumGenres } from '@/common/enums/EnumGenres';

export const optionsPopularity = [
  { value: EnumGenres.POPULARITY_ASC, label: 'Popularity Ascending' },
  { value: EnumGenres.POPULARITY_DESC, label: 'Popularity Descending' },
  { value: EnumGenres.RELEASE_DATE_ASC, label: 'Release Date Ascending' },
  { value: EnumGenres.RELEASE_DATE_DESC, label: 'Release Date Descending' },
  { value: EnumGenres.VOTE_AVERAGE_ASC, label: 'Rating Ascending' },
  { value: EnumGenres.VOTE_AVERAGE_DESC, label: 'Rating Descending' },
];
