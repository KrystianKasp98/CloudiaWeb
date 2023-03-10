import LocalStorage from '../../helpers/LocalStorage';

import en from './en.json';
import pl from './pl.json';

const resources = {
  en,
  pl
};

export const resourcesLanguages = ['en', 'pl-PL'];

export default {
  resources,
  fallbackLng: 'en',
  lng:
    LocalStorage.get(LocalStorage.keys.lang) ||
    window.navigator.language ||
    'en'
  // lng: 'en-En' // testing english version
};
