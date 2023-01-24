import { useContext } from 'react';
import { AppContext } from '../../App/context/AppContext';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import LocalStorage from '../../helpers/LocalStorage';

import './styles/ThemeSwitch.scss';

interface ThemeSwitchProps {
  refreshApp: () => void;
}

function ThemeSwitch({refreshApp}: ThemeSwitchProps) {
  const context = useContext(AppContext);

  const switchTheme = () => {
    if (context?.toggleDarkMode) {
      context.toggleDarkMode();
      LocalStorage.set(LocalStorage.keys.darkMode, !context.darkMode);
      refreshApp();
    }
  }

  return (
    <div className='ThemeSwitch'>
      <button
        onClick={switchTheme}
        className={`ThemeSwitch__button ${context?.darkMode ? 'ThemeSwitch__button--dark' : 'ThemeSwitch__button--light'}`}
      >
        {context?.darkMode ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
      </button>
    </div>
  );
}

export default ThemeSwitch;