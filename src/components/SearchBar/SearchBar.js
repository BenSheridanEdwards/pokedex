import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import _debounce from 'lodash.debounce';
import searchIcon from '../../assets/images/pokeball.svg';

const SearchBar = (props) => {
  const {
    dataList,
    placeholderText,
    itemsPerPage,
    resetPageNumber,
    searchPriority,
    searchValue,
    setDisplayList,
    setSearchValue,
    setTotalPages,
  } = props;

  const fuse = new Fuse(dataList, {
    includeScore: true,
    keys: searchPriority,
  });

  const searchDataList = (searchString) => {
    const bestMatch = fuse.search(searchString);
    const cleanedBestMatch = [];

    bestMatch.forEach((item) => {
      cleanedBestMatch.push(item.item);
    });

    setTotalPages(Math.ceil(cleanedBestMatch.length / itemsPerPage));
    resetPageNumber();
    setDisplayList(cleanedBestMatch);
  };

  const debouncedSearch = _debounce((searchString) => {
    searchDataList(searchString);
  }, 200);

  const handleSearchChange = (event) => {
    const searchString = event.target.value;
    setSearchValue(searchString);

    if (searchString.length) debouncedSearch(searchString);
  };

  return (
    <div className="search-bar">
      <input
        id="search"
        type="search"
        className="search-bar__input"
        value={searchValue}
        placeholder={placeholderText}
        onChange={(e) => handleSearchChange(e)}
      />

      <img
        className="search-bar__image"
        src={searchIcon}
        alt="Search Pokemon"
      />
    </div>
  );
};

SearchBar.propTypes = {
  dataList: PropTypes.array,
  placeholderText: PropTypes.string,
  itemsPerPage: PropTypes.number,
  resetPageNumber: PropTypes.func,
  searchPriority: PropTypes.array,
  searchValue: PropTypes.string,
  setDisplayList: PropTypes.func,
  setSearchValue: PropTypes.func,
  setTotalPages: PropTypes.func,
};

export default SearchBar;
