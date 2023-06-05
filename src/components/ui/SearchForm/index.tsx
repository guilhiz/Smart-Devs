'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';

const SearchForm = () => {
  return (
    <form className="form-control relative w-80">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto pl-10" />
      <div className="absolute left-3 top-1/4">
        <MagnifyingGlass size={22} color="#cccccc" />
      </div>
    </form>
  );
};

export default SearchForm;
