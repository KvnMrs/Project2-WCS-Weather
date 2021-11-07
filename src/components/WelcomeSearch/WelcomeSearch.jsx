import React from 'react';

const WelcomeSearch = ({ search, setSearch }) => (
  <div className="flex flex-col min-w-full items-center">
    <form className="mt-10 w-64">
      <label className="text-gray-800 pt-14">
        <input
          value={search}
          type="email"
          placeholder="search your campus..."
          className="mt-1
                    block
                    w-full
                    py-3
                    px-4
                    rounded-md
                    border
                    border-gray-300
                    shadow-sm
                    transition-all
                    transition-duration-200
                    ease-in-out
                    outline-none
                    focus:border-dark_wild_red"
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  </div>
);

export default WelcomeSearch;
