import { t } from 'i18next';
import { i18n } from '../../main';
import type {ChangeEvent} from 'react';
import {resourcesLanguages} from '../i18n';
import LocalStorage from '../../helpers/LocalStorage';

import './styles/LanguageSelector.scss';

interface LanguageSelectorProps {
  refreshApp: () => void;
}

function LanguageSelector({refreshApp}: LanguageSelectorProps) {
  const selectedLanguage = i18n.language;

  const changeLanguage = async(event: ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;

    i18n
      .changeLanguage(lang)
      .then((t) => {
        t('key');
        refreshApp();
      });
    
    LocalStorage.set(LocalStorage.keys.lang, lang);
  }

  return (
    <div className='LanguageSelector'>
        <label htmlFor='languages'>
          {t('components.languageSelector.changeLanguage')}
        </label>

      <select
        name='languages'
        id='languages'
        onChange={changeLanguage}
        defaultValue={selectedLanguage}
      >
          {resourcesLanguages.map(language => (
            <option
              value={language}
              key={language}
            >
              {t(`components.languageSelector.languages.${language}`)}
            </option>
          ))}
        </select>
    </div>
  );
};

export default LanguageSelector;
