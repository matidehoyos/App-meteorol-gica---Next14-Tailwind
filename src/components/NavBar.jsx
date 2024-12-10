import Link from 'next/link';
import SearchBar from './SearchBar';

const NavBar = ({ onSearch }) => {

  return (
    <div className='w-auto lg:w-[1000px] mx-auto mb-6 flex justify-center items-stretch md:items-center gap-2 md:gap-3 lg:gap-4'>
        <Link href='/' className='hidden md:block w-auto p-2 text-gray-800 bg-orange-400 font-[700] rounded-md lg:hover:bg-orange-200 transition-all duration-500'>WEATHER APP</Link>
        <Link href='/' className='w-auto px-2 flex items-center text-gray-800 bg-orange-400 font-[600] rounded-l-md md:hidden'>W-APP</Link>
        <div className='flex-1'><SearchBar onSearch={onSearch} /></div>
    </div>
  );
};

export default NavBar;