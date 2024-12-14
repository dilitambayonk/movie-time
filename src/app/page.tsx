'use client';

import DiscoverMovies from './components/DiscoverMovies';
import HeaderCarousel from './components/HeaderCarousel';

export default function Home() {
  return (
    <div className="my-20 mt-16">
      <HeaderCarousel />
      <DiscoverMovies />
    </div>
  );
}
