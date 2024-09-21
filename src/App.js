import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ReactDom from "react-dom/client"
import { createRoot } from 'react-dom/client';
import Register from './components/Rejister';
import Dashboard from './components/admin/Dashboard'
import UserProfile from './components/profile'
import AboutUs from './components/AboutUs';
import Services from './components/Services';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/admin/dashbord' element={<Dashboard />} />
            <Route path='/about_us' element={<AboutUs />} />
            <Route path='/services' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


const root = createRoot(document.getElementById('root'));
root.render(<App />);