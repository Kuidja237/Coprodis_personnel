// src/components/Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PolicyIcon from '@mui/icons-material/Policy';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, borderTop: '1px solid', borderColor: 'primary.light' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom color="primary">
              Contact
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon color="primary" sx={{ mr: 1 }} />
              <Typography>+237 655 983 890</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon color="primary" sx={{ mr: 1 }} />
              <Typography>contact@coprodis.net</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="Facebook" color="primary" href='https://www.facebook.com/profile.php?id=100063931391898'>
                <FacebookIcon />
              </IconButton>
              
              <IconButton aria-label="LinkedIn" color="primary" href='https://www.linkedin.com/company/coprodis-interim-sarl/'>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom color="primary">
              Termes et Conditions
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PolicyIcon color="primary" sx={{ mr: 1 }} />
              <Typography>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Politique de confidentialité</a>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <DescriptionIcon color="primary" sx={{ mr: 1 }} />
              <Typography>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Conditions d'utilisation</a>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom color="primary">
              Adresse
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
              <LocationOnIcon color="primary" sx={{ mr: 1, mt: 0.5 }} />
              <Typography>
                Situé face super U Bali,<br />
                1er Etage de Pategou Business Center
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
          © 2024 Copodis Personnel. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;