import React, { useState } from 'react';

// Components
import InputSearch from '../../components/InputSearch';

// Styles
import { Container, IconClose, Searches, SearchCity } from './styles';

const index = ({ isClose, handleClose, setCity }) => {
  const [searches, setSearches] = useState(['Helsinki']);

  const setNewCity = (id) => {
    setCity(searches[id]);
    handleClose();
  };

  return (
    <Container isClose={isClose}>
      <div>
        <IconClose className="material-icons" onClick={handleClose}>
          close
        </IconClose>
      </div>
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
