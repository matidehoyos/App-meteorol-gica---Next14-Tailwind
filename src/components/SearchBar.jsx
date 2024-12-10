import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('')
  };

  return (
    <div>
        <form onSubmit={handleSearch} className='w-full'>
          <label htmlFor="" className='bg-white bg-opacity-80 flex justify-between border border-white rounded-r-md md:rounded-lg overflow-hidden'>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ciudad: (ej. Buenos Aires)"
              className="w-full px-2 md:px-4 py-2 bg-transparent text-gray-900 font-bold placeholder:text-gray-800 placeholder:text-sm md:placeholder:text-[17px] lg:placeholder:font-bold focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              disabled={query.trim() === ''}
              className={`px-4 md:px-3 bg-orange-400 md:text-lg text-gray-800 xl:hover:bg-orange-500 ${
                query.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >             
               <FaSearch />
            </button>
          </label>
        </form>
    </div>
  );
};

export default SearchBar;
