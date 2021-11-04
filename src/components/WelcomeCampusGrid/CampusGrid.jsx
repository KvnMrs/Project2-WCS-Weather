/* eslint-disable function-paren-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import WelcomeSearch from '../WelcomeSearch/WelcomeSearch';
import CampusItem from '../WelcomeCampusItem/CampusItem';
import WelcomeNoResults from '../WelcomeNoResults/WelcomeNoResults';

const CampusGrid = ({ data, setPopupItem }) => {
  const [search, setSearch] = useState('');

  // CampusGrid contains CampusItems and Map the Fetch function
  return (
    <>
      <WelcomeSearch search={search} setSearch={setSearch} />
      <div className="flex flex-col mt-5 w-full flex-grow">
        {data &&
        data.filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
            item.country
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase()),
        ).length === 0 ? (
          <WelcomeNoResults />
        ) : null}
        <div className="grid px-4 w-full auto-cols-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8  mt-16">
          {data
            ? data
                .filter(
                  (item) =>
                    item.name
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase()) ||
                    item.country
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase()),
                )
                .map((item) => (
                  <CampusItem
                    item={item}
                    key={item.id}
                    onClick={(item) => setPopupItem(...item, item.target.value)}
                  />
                ))
            : null}
        </div>
      </div>
    </>
  );
};

export default CampusGrid;
