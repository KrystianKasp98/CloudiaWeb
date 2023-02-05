import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback, useContext } from 'react';

import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import Error from '../pages/Error/Error';
import LanguageSelector from '../components/LanguageSelector/LanguageSelector';
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch';

import { AppContext } from './context/AppContext';

import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const navigate = useNavigate();
  const [, handleRefreshApp] = useState<null | {}>(null);
  const context = useContext(AppContext);

  const forceRefreshApp = useCallback(() => handleRefreshApp({}), []);

  useEffect(() => {
    if (!context?.cookies?.authenticated) {
      navigate('/login');
    }
  }, []);

  return (
    <div
      className={`App ${
        context?.darkMode ? 'App__mode--dark' : 'App__mode--light'
      }`}
    >
      <LanguageSelector refreshApp={forceRefreshApp} />
      <ThemeSwitch refreshApp={forceRefreshApp} />
      <Routes>
        {/* uncomment after testing */}
        <Route path="/login" element={<Login />} />
        {/* comment after testing */}
        {/* <Route path="/login" element={import.meta.env.MODE === 'development' ? <Main/> : <Login/>} /> */}
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
