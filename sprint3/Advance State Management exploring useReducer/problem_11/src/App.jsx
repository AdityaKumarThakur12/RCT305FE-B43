import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './signup';
import Login from './login';
import PrivateRoute from './privateRoute';
import SearchCountries from './searchCountries';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={theme}>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
        <Navigation />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<PrivateRoute element={<SearchCountries />} />} />
        </Routes>
      </div>
    </Router>
  );
}

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/signup')}>SignUp</button>
    </>
  );
};

export default App;