// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Un vert vif
      light: '#81C784',
      dark: '#388E3C',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF', // Blanc
      contrastText: '#4CAF50',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#4CAF50',
    },
    h2: {
      fontWeight: 600,
      color: '#4CAF50',
    },
    h3: {
      fontWeight: 600,
      color: '#4CAF50',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#45a049',
          },
        },
        outlinedPrimary: {
          borderColor: '#4CAF50',
          '&:hover': {
            backgroundColor: 'rgba(76, 175, 80, 0.04)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#4CAF50',
        },
      },
    },
  },
});

export default theme;