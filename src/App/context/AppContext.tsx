import {createContext, useState} from 'react';
import LocalStorage from '../../helpers/LocalStorage';
import { useCookies } from 'react-cookie';

interface AppProviderI {
  children: JSX.Element | JSX.Element[];
}

interface ContextPropsI {
  darkMode: boolean;
  toggleDarkMode: () => void;
  cookies: any;
  setCookie: (name: 'authenticated', value: any, options?: {} | undefined) => void;
}

export const AppContext = createContext<null | ContextPropsI>(null);

const AppProvider = ({children}: AppProviderI) => {
  const defaultDarkMode = LocalStorage.has(LocalStorage.keys.darkMode) ? LocalStorage.get(LocalStorage.keys.darkMode) : false;
  const [darkMode, setDarkMode] = useState<boolean>(defaultDarkMode);

  const toggleDarkMode = () => setDarkMode(val => !val);

  const [cookies, setCookie] = useCookies(['authenticated']);

  const value: ContextPropsI = {
    darkMode,
    cookies,
    toggleDarkMode,
    setCookie,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
export default AppProvider;
