import { Routes, Route } from 'react-router-dom';
import './App.css';
import { UserProfile } from './components/userprofile';
import { Users } from './components/users';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/user/:userId" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
