import React, { useState } from 'react';

// Styles
import { SearchContainer, Container, Icon, Search, Button } from './styles';

const index = ({ searches, setSearches, handleClose, setCity }) => {
  const [newCity, setNewCity] = useState('');

  const handleSetCity = (event) => setNewCity(event.target.value);

  const setSearch = () => {
    setSearches(searches.concat(newCity));
    setCity(newCity);
    handleClose();
  };

  return (
    <SearchContainer>
      <Container>
        <Icon className="material-icons">search</Icon>
        <Search
          type="text"
          placeholder="search location"
          value={newCity}
          onChange={handleSetCity}
        />
      </Container>
      <Button onClick={setSearch}>Search</Button>
    </SearchContainer>
  );
};

export default index;
