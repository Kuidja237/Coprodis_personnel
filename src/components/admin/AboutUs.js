import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Box 
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
}));

const ServiceIcon = styled('div')(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const services = [
  {
    title: "Offre Clean-house",
    description: "Cette offre inclut les services essentiels tels que le ménage, la lessive, la préparation des repas, la vaisselle et l'entretien général de la maison.",
    price: "100.000 FCFA/mois",
    hours: "07h30 à 16h00"
  },
  {
    title: "Offre Manage home",
    description: "Cette offre propose des services plus étendus, avec des spécificités notamment la gestion des tâches bien précises et un personnel précis. Elle convient aux familles qui ont des besoins plus spécifiques et qui souhaitent un service haut de gamme.",
    price: "110.000 FCFA/mois",
    hours: "07h30 à 16h30"
  },
  {
    title: "Offre home-care",
    description: "Cette offre est adaptée aux besoins tels que la garde d'enfants, l'aide aux devoirs, la préparation des repas, l'assistance aux personnes âgées, etc. La garde des personnes âgées et la cuisine peuvent être personnalisées en fonction des préférences du client.",
    price: "120.000 - 140.000 FCFA/mois",
    hours: "Selon les besoins"
  },
  {
    title: "Offre Quick household (ménagères tampons)",
    description: "Pour ceux qui n'ont pas besoin d'une assistance à temps plein, cette offre à temps partiel peut être proposée. Cela peut inclure des heures de ménage sur certains jours de la semaine ou un weekend.",
    price: "100.000 FCFA/mois",
    hours: "07h30 à 16h30"
  },
  {
    title: "Seasonal housework",
    description: "Cette offre est dédiée à certains clients qui recherchent une aide domestique uniquement pendant certaines périodes de l'année (par exemple, pendant les vacances). Une offre saisonnière est mise en place pour répondre à ces besoins temporaires.",
    price: "65.000 FCFA /2 semaines",
    hours: "Selon les besoins du client"
  }
];

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom color="primary">
        Qui sommes-nous
      </Typography>
      <Typography variant="h4" align="center" gutterBottom color="primary" sx={{ mb: 4 }}>
        TALENT. PLACEMENT. SUCCÈS.
      </Typography>
      
      <Box sx={{ mb: 6 }}>
        <Typography variant="body1" paragraph>
          COPRODIS INTERIM SARL est une agence de placement de personnel spécialisée dans la mise à disposition de personnel de maison qualifié. Nous nous engageons à fournir des services de haute qualité pour répondre aux besoins spécifiques de nos clients.
        </Typography>
        <Typography variant="body1" paragraph>
          Notre mission est de faciliter la vie quotidienne de nos clients en leur offrant des solutions de personnel de maison adaptées à leurs besoins. Nous proposons différents packages pour répondre à une variété de situations et de préférences.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 4 }}>
        Nos différents packages de mise à disposition du personnel de maison
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardContent>
                <ServiceIcon>
                  <Typography variant="h4" color="white">
                    {index + 1}
                  </Typography>
                </ServiceIcon>
                <Typography variant="h5" component="div" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {service.description}
                </Typography>
                <Typography variant="body1" color="primary" fontWeight="bold">
                  Prix : {service.price}
                </Typography>
                <Typography variant="body2">
                  Horaires : {service.hours}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Contactez-nous
        </Typography>
        <Typography variant="body1">
          Téléphone : +237 655 98 38 90
        </Typography>
        <Typography variant="body1">
          Adresse : Situé face SUPER U BALI, 1er Etage du PATEGOU BUSINESS CENTER
        </Typography>
        <Typography variant="body1">
          Email : Contact@coprodis.net
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;