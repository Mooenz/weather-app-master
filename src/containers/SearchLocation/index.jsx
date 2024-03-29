import React, { useState } from 'react';

// Components
import InputSearch from '../../components/InputSearch';

// Styles
import { Container, IconClose, Searches, SearchCity } from './styles';

const index = ({ isClose, handleClose, setCity }) => {
  const [searches, setSearches] = useState([]);

  const setNewCity = (id) => {
    setCity(searches[id]);
    handleClose();
  };

  return (
    <Container isClose={isClose}>
      <IconClose>
        <span className="material-icons" onClick={handleClose}>
          close
        </span>
      </IconClose>
      <InputSearch
        searches={searches}
        setCity={setCity}
        setSearches={setSearches}
        handleClose={handleClose}
      />
      <Searches>
        {searches.map((search, id) => (
          <SearchCity key={id} onClick={() => setNewCity(id)}>
            {search} <span className="material-icons">navigate_next</span>
          </SearchCity>
        ))}
      </Searches>
    </Container>
  );
};

export default index;
