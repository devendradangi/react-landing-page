import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { OAUTH_CLIENT } from './utils/utils';
import { Toaster } from 'react-hot-toast';
import Login from './components/auth/Login/Login';
import SignUp from './components/auth/Signup/Signup';
import HomePage from './components/dashboard/HomePage/HomePage';
import DashboardLayout from './components/dashboard/DashboardLayout/DashboardLayout';
import AnalyticsPage from './components/dashboard/Analytics/AnalyticsPage';
import Dashboard from './components/dashboard/Dashboard/Dashboard';
import RecipesList from './components/dashboard/Recipes/RecipesList/RecipesList';
import RecipeDetails from './components/dashboard/Recipes/RecipeDetails/RecipeDetails';




const CLIENT_ID = OAUTH_CLIENT.GOOGLE.CLIENT_ID

function App() {
  return (
    <div><Toaster position="top-right" reverseOrder={false} />
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <Router>
          <div className="container-fluid p-0">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='home' element={<HomePage />} />
                <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="recipes" element={<RecipesList />} />
                <Route path="recipes/:id" element={<RecipeDetails />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;

