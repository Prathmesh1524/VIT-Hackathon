import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="HealthTech logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
       HealthTech
        </p>
      </Link>

    
      <div className="flex-between gap-5">
       
       <button className='bg-slate-700 rounded-lg p-2 hover:bg-slate-600'> <Link href={"/about"}>About </Link></button>
       <button className='bg-slate-700 rounded-lg p-2 hover:bg-slate-600'> <Link href={"/blogs"}> Blogs </Link></button>
       <button className='bg-slate-700 rounded-lg p-2 hover:bg-slate-600'> <Link href={"/landing"}> Main </Link></button>
       <button className='bg-slate-700 rounded-lg p-2 hover:bg-slate-600'> <Link href={"/chatbot"}>chatBot  </Link></button>
       <button className='bg-slate-700 rounded-lg p-2 hover:bg-slate-600'> <Link href={"/contact"}>Contact</Link></button>
       <button className='bg-slate-700 rounded-lg p-2 hover:bg-slate-600'> <Link href={"/"}> Doctor</Link></button>
      
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
