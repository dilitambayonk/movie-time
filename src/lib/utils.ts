import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CONFIGS } from './configs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImageUrl = (image: string) => CONFIGS.site.imageUrl + image;

export const getDate = (date: string) => {
  const newDate = new Date(date);

  return {
    year: newDate.getFullYear(),
    month: newDate.getMonth() + 1,
    day: newDate.getDate(),
  };
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
