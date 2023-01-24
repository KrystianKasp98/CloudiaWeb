import {createContext, useState} from 'react';
import LocalStorage from '../../helpers/LocalStorage';

interface AppProviderI {
  children: JSX.Element | JSX.Element[];
}

interface ContextPropsI {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const AppContext = createContext<null | ContextPropsI>(null);

const AppProvider = ({children}: AppProviderI) => {
  const defaultDarkMode = LocalStorage.has(LocalStorage.keys.darkMode) ? LocalStorage.get(LocalStorage.keys.darkMode) : false;
  const [darkMode, setDarkMode] = useState<boolean>(defaultDarkMode);

  const toggleDarkMode = () => setDarkMode(val => !val);

  const value: ContextPropsI = {
    darkMode,
    toggleDarkMode
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
export default AppProvider;
