import {Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import {useEffect, useState, useCallback} from 'react';

import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import Error from '../pages/Error/Error';

import LanguageSelector from '../components/LanguageSelector/LanguageSelector';

import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const {state} = useLocation();
  const navigate = useNavigate();
  const [, handleRefreshApp] = useState<null|{}>(null);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  //@todo save darkMode option in localStorage
  const forceRefreshApp = useCallback(() => handleRefreshApp({}), []);

  useEffect(() => {
    if (!state?.login) {
      navigate('/login');
    }
  }, []);

  return (
    <div className={`App ${darkMode ? 'App__mode--dark' : 'App__mode--light'}`}>
      <LanguageSelector refreshApp={forceRefreshApp}/>
      <Routes>
        {/* uncomment after testing */}
        <Route path="/login" element={<Login/>} />
        {/* comment after testing */}
        {/* <Route path="/login" element={import.meta.env.MODE === 'development' ? <Main/> : <Login/>} /> */}
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
