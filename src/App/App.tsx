import {Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import {useEffect} from 'react';

import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import Error from '../pages/Error/Error';

import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const {state} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.login) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="App">
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
