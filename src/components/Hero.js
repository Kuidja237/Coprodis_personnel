// src/components/Hero.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import SearchIcon from '@mui/icons-material/Search';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { heroImages, services } from '../data/constants';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Box sx={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        onChange={handleSlideChange}
      >
        {heroImages.map((image, index) => (
          <div key={index} style={{ height: '90vh' }}>
            <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto', objectFit: 'cover'}} />
          </div>
        ))}
      </Carousel>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 1,
          width: '80%',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom sx={{color: 'white', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>
          {heroImages[currentSlide].title}
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: 'white',textShadow: '2px 2px 4px rgba(0,0,0,0.5)',display: 'block',
            mb: 2 }}>
          {heroImages[currentSlide].description}
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 4,
          }}
        >
          <TextField
            select
            label="Type de service"
            variant="outlined"
            sx={{ minWidth: 200, mr: 2, bgcolor: 'white' }}
          >
            {services.map((service) => (
              <MenuItem key={service} value={service}>
                {service}
              </MenuItem>
            ))}
          </TextField>
          {/* <Button
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
            size="large"
          >
            Rechercher
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;