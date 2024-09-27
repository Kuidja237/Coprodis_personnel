// Modifications à apporter dans src/components/Header.js

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logoImage from '../assets/images/COPODIS LOGO.jpeg';
import Login from "../components/Login"
import { useNavigate,useLocation} from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation(); // Ajoutez cette ligne
  // const handleLoginClick = () => {
  //   document.getElementById("main-content").innerHTML = "";
  //   const loginComponent = React.createElement(Login);
  //   React.render(loginComponent, document.getElementById("main-content"));
  // };

  // Ajoutez cette fonction
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Ajoutez ce style
  const activeStyle = {
    borderBottom: '2px solid white',
    paddingBottom: '3px',
  };
  let isLoginVisible = false;

  // const handleLoginClick = () => {
  //   isLoginVisible = true;
  //   renderContent();
  // };

  const renderContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.innerHTML = ""; // Efface le contenu existant
      if (isLoginVisible) {
        mainContent.appendChild(document.createElement('div')); // Crée un div pour le composant Login
        const loginElement = <Login />;
        mainContent.appendChild(loginElement); // Ajoute le composant Login
      } else {
        mainContent.innerHTML = "<div>Other page content</div>";
      }
    }
  };


  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar>
        <img src={logoImage} alt="Copodis Personnel Logo" style={{ height: 40, marginRight: 16}} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.primary.main }}>
          Coprodis Personnel
        </Typography>
        {isMobile ? (
          <IconButton
            color="primary"
            aria-label="menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <Button color="primary" href='/'>Accueil</Button>
            <Button color="primary" href='/services'>Services</Button>
            <Button color="primary" href='/about_us'>Qui sommes-nous</Button>
            {/* <Button color="primary" variant="outlined" href='/login'>Connexion</Button>  */}
          </>
        )}
      </Toolbar>
      {/* ... le reste du composant Header ... */}
    </AppBar>
  );
};

export default Header;