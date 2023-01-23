import {createContext, useState} from 'react';

interface AppProviderI {
  children: JSX.Element | JSX.Element[];
}

interface ContextPropsI {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const AppContext = createContext<null | ContextPropsI>(null);

const AppProvider = ({children}: AppProviderI) => {
  const [darkMode, setDarkMode] = useState(false);

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
