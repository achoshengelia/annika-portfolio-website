import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from './themes';
import App from './App';
import { GlobalContextProvider } from './context/globalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Theme>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </Theme>
    </Router>
  </React.StrictMode>
);
