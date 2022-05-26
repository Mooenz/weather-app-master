import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// StatesContext
import StatesProvider from './context/StatesContext';

//Styles
import GlobalStyles from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalStyles />
    <StatesProvider>
      <App />
    </StatesProvider>
  </React.StrictMode>
);
