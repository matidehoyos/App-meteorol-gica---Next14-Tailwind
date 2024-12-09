import Link from 'next/link';
import SearchBar from './SearchBar';

const NavBar = ({ onSearch }) => {

  return (
    <div className='w-[96%] md:w-[94%] lg:w-[1000px] mx-auto py-3 lg:py-5 flex justify-center items-stretch md:items-center gap-2 md:gap-3 lg:gap-4'>
        <Link href='/' className='hidden md:block w-auto p-2 text-black bg-yellow-300 font-extrabold rounded-md lg:hover:bg-transparent lg:hover:border lg:hover:border-yellow-300 lg:hover:text-yellow-300 transition-all duration-500'>WEATHER APP</Link>
        <Link href='/' className='w-auto px-2 flex items-center text-black bg-yellow-300 font-extrabold rounded-sm md:hidden'>W-APP</Link>
        <div className='flex-1'><SearchBar onSearch={onSearch} /></div>
    </div>
  );
};

export default NavBar;