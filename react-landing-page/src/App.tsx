import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { OAUTH_CLIENT } from './common';
import Login from './auth/Login/Login';
import SignUp from './auth/Signup/Signup';

const CLIENT_ID = OAUTH_CLIENT.GOOGLE.CLIENT_ID

function App() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;

