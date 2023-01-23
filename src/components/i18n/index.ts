import en from './en.json';
import pl from './pl.json';

const resources = {
  en,
  pl
};

export const resourcesLanguages = ['en', 'pl-PL'];

//@todo create component that allows change language
// https://www.i18next.com/overview/api

//@todo add defaultLanguage in localstorage

export default {
  resources,
  fallbackLng: 'en',
  lng: window.navigator.language || 'en',
  // lng: 'en-En' // testing english version
};
