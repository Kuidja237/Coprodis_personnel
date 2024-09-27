import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Rating } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { testimonials } from '../data/constants';
import '../style/Testimonials.css';  // Importez le fichier CSS
const Testimonials = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Ils nous font confiance
        </Typography>
        <Carousel 
          autoPlay={true}
          interval={5000}
          showArrows={true} 
          infiniteLoop={true} 
          showThumbs={false} 
          showStatus={false}
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} sx={{ maxWidth: 600, margin: 'auto' }}>
              <CardMedia
                component="img"
                // height="140"
                image={testimonial.image}
                alt={`Photo de ${testimonial.author}`}
                className="testimonial-image"
                //sx={{ objectFit: 'cover', borderRadius: '50%', width: 140, height: 140, margin: '20px auto' }}
                // sx={{ 
                //   width: "200px", 
                //   height: "200px", 
                //   margin: '20px auto',
                //   borderRadius: '50%',
                //   objectFit: 'cover'
                // }}
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary" paragraph>
                  "{testimonial.text}"
                </Typography>
                <Typography variant="subtitle1" color="text.primary">
                  {testimonial.name}
                </Typography>
                <Rating value={testimonial.rating} readOnly />
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Testimonials;