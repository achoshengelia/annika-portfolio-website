import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalContextProvider } from './context/globalContext';
import Theme from './themes';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalContextProvider>
        <Theme>
          <App />
        </Theme>
      </GlobalContextProvider>
    </Router>
  </React.StrictMode>
);
