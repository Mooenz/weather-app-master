import React, { createContext, useState } from 'react';

export const StatesContext = createContext();

const { Provider } = StatesContext;

export const StatesProvider = ({ children }) => {
  const [isClose, setIsCLose] = useState(true);
  const [city, setCity] = useState('Helsinki');

  return (
    <Provider value={{isClose, setIsCLose, city, setCity}}>{children}</Provider>
  );
};

export default StatesProvider;
