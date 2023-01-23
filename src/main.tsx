import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import {BrowserRouter} from 'react-router-dom';
import i18n from 'i18next';
import initObject from '../src/components/i18n/index';


await i18n
  .init(initObject);
  
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

export { i18n };
