'use client';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { LayoutGrid, Search } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { itemsGenres } from '@/app/constants/genres';

const Navbar = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 h-[66px] w-full bg-white/5 transition duration-200 ease-in-out',
        scrolling && 'bg-black/80 backdrop-blur-sm'
      )}
    >
      <div className="container flex h-full items-center justify-between gap-x-8">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={113} height={31} priority />
        </Link>
        <div className="flex h-9 flex-1 items-center rounded bg-black/10 px-2">
          <Image src="/icon-movie.svg" alt="icon-movie" width={24} height={24} priority />
          <Input
            className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Find Movie"
          />
          <Search size={16} />
        </div>
        <Menubar className="gap-x-6">
          <MenubarMenu>
            <MenubarTrigger>
              <LayoutGrid size={20} className="mr-4" />
              CATEGORIES
            </MenubarTrigger>
            <MenubarContent align="center" className="text-dark bg-white">
              {itemsGenres.map((genre, index) => (
                <MenubarItem key={index}>{genre.name}</MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
          <Button variant="ghost" className="font-semibold" asChild>
            <Link href="/movies">MOVIES</Link>
          </Button>
          <Button variant="ghost" className="font-semibold">
            TV SHOW
          </Button>
          <Button variant="ghost" className="font-semibold">
            LOGIN
          </Button>
        </Menubar>
      </div>
    </nav>
  );
};

export default Navbar;
