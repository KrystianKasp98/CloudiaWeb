import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import {BrowserRouter} from 'react-router-dom';
import i18n from 'i18next';
import initObject from '../src/components/i18n/index';
import AppProvider from './App/context/AppContext';
import { CookiesProvider } from 'react-cookie';


await i18n
  .init(initObject);
  
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <CookiesProvider>
          <AppProvider>
            <App />
          </AppProvider>
        </CookiesProvider>
      </BrowserRouter>
  </React.StrictMode>,
);

export { i18n };
