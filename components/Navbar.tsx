import Image from 'next/image';
import Link from 'next/link';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[100] flex w-full items-center justify-between bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="zoomclone logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Zoom Clone
        </p>
      </Link>
      <div className="flex-between gap-5">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;