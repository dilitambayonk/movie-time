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

const genres = [
  { name: 'ACTION', link: '/' },
  { name: 'ADVENTURE', link: '/' },
  { name: 'ANIMATION', link: '/' },
  { name: 'COMEDY', link: '/' },
  { name: 'CRIME', link: '/' },
  { name: 'DOCUMENTARY', link: '/' },
  { name: 'DRAMA', link: '/' },
  { name: 'FAMILY', link: '/' },
  { name: 'FANTASY', link: '/' },
  { name: 'HISTORY', link: '/' },
  { name: 'HORROR', link: '/' },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 h-[66px] w-full bg-white/5">
      <div className="container flex h-full items-center justify-between gap-x-8">
        <Image src="/logo.svg" alt="logo" width={113} height={31} priority />
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
            <MenubarContent align="center">
              {genres.map((genre, index) => (
                <MenubarItem key={index}>{genre.name}</MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
          <Button variant="ghost" className="font-semibold">
            MOVIES
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
