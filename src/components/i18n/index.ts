import en from './en.json';
import pl from './pl.json';
import i18n from 'i18next';

const resources = {
  en,
  pl
};

//@todo create component that allows change language
// https://www.i18next.com/overview/api

export default async function () {
  await i18n
    .init({
      resources,
      fallbackLng: 'en',
      lng: window.navigator.language || 'en',
      // lng: 'en-En' // testing english version
    });
};
