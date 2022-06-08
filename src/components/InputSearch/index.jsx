import React, { useState } from 'react';

// Styles
import { SearchContainer, Container, Icon, Search, Button } from './styles';

const index = ({ searches, setSearches, handleClose, setCity }) => {
  const [newCity, setNewCity] = useState('');

  const handleSetCity = (event) => setNewCity(event.target.value);

  const setSearch = (event) => {
    // Cancel refresh
    event.preventDefault();

    // set city to citys searches
    setSearches(searches.concat(newCity));

    // set search city
    setCity(newCity);

    // hidden component
    handleClose();

    // Clear input
    setNewCity('');
  };

  return (
    <SearchContainer onSubmit={setSearch}>
      <Container>
        <Icon className="material-icons">search</Icon>
        <Search
          type="text"
          placeholder="search location"
          value={newCity}
          onChange={handleSetCity}
        />
      </Container>
      <Button>Search</Button>
    </SearchContainer>
  );
};

export default index;
