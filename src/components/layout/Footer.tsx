import Image from 'next/image';

const Footer = () => {
  return (
    <div className="h-40 bg-black/30">
      <div className="container relative flex h-full items-center justify-between text-xs text-secondary">
        <p>© 2021 MoovieTime. All rights reserved.</p>
        <Image
          src="/logo-mono.svg"
          alt="logo-mono"
          width={88}
          height={25}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          priority
        />
        <p>Made with NextJs</p>
      </div>
    </div>
  );
};

export default Footer;
