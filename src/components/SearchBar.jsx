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
          <label htmlFor="" className='bg-gray-700 flex justify-between border border-gray-600 rounded-sm md:rounded-lg overflow-hidden'>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ciudad: (ej. Londres)"
              className="w-full px-2 md:px-4 py-2 bg-transparent placeholder:text-gray-200 placeholder:text-sm md:placeholder:text-md"
            />
            <button type="submit" className="px-2 md:px-3 bg-gray-800 md:text-lg text-gray-100 xl:hover:bg-gray-950">
              <FaSearch />
            </button>
          </label>
        </form>
    </div>
  );
};

export default SearchBar;
