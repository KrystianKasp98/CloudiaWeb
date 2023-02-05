import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import i18n from 'i18next';
import { CookiesProvider } from 'react-cookie';

import initObject from './components/i18n/index';
import AppProvider from './App/context/AppContext';
import App from './App/App';

await i18n.init(initObject);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

export { i18n };
