// components/Dashboard.js
import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

function Dashboard({ onLogout }) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Tableau de bord
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Bienvenue sur votre tableau de bord!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={onLogout}
          sx={{ mt: 3 }}
        >
          Se déconnecter
        </Button>
      </Box>
    </Container>
  );
}

export default Dashboard;