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

const genres = [
  { name: 'Action', link: '/' },
  { name: 'Adventure', link: '/' },
  { name: 'Animation', link: '/' },
  { name: 'Comedy', link: '/' },
  { name: 'Crime', link: '/' },
  { name: 'Documentary', link: '/' },
  { name: 'Drama', link: '/' },
  { name: 'Family', link: '/' },
  { name: 'Fantasy', link: '/' },
  { name: 'History', link: '/' },
  { name: 'Horror', link: '/' },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 h-[66px] w-full bg-white/5">
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
              Categories
            </MenubarTrigger>
            <MenubarContent align="center">
              {genres.map((genre, index) => (
                <MenubarItem key={index}>{genre.name}</MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Movies</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>TV Show</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Login</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
    </nav>
  );
};

export default Navbar;
