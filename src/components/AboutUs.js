import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Box, 
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from './Footer';
import Header from './Header';
import teamImage from '../assets/images/woman-trying-clean-dirty-house.jpg'; // Ajustez le chemin selon votre structure de fichiers
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
    price: "65.000 FCFA /semaines",
    hours: "Selon les besoins du client"
  },
  {
    title: "Staff Protocolaire",
    description: "Cette offre est dédiée aux clients qui recherchent un personnel qualifié pour des événements officiels ou cérémonies, assurant un service de protocole exemplaire. Le staff protocolaire est formé pour respecter les normes et attentes des occasions formelles.",
    price: "100.000 FCFA /événement",
    hours: "Selon les exigences de l'événement"
  }
  
];

const AboutUs = () => {
  return (
    <Box mt={8}> 
        <Header />

    <Container maxWidth="lg" sx={{ py: 8 }}>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={teamImage}
            alt="Équipe Coprodis"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <Box sx={{ mb: 6 }}>
        <Typography variant="body1" paragraph>
          COPRODIS INTERIM SARL est une agence de placement de personnel spécialisée dans la mise à disposition de personnel de maison qualifié. Nous nous engageons à fournir des services de haute qualité pour répondre aux besoins spécifiques de nos clients.
        </Typography>
        <Typography variant="body1" paragraph>
          Notre mission est de faciliter la vie quotidienne de nos clients en leur offrant des solutions de personnel de maison adaptées à leurs besoins. Nous proposons différents packages pour répondre à une variété de situations et de préférences.
        </Typography>
      </Box>

        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {['NOS VALEURS', 'NOTRE MISSION', 'NOTRE LEITMOTIV', 'NOTRE CULTURE D\'ENTREPRISE', 'NOTRE VISION'].map((item, index) => (
          <Grid item xs={12} sm={6} md={index < 3 ? 4 : 6} key={item}>
            <Card sx={{ height: '100%', backgroundColor: 'primary.main', color: 'white' }}>
              <CardContent>
                <Typography variant="h6" component="div" align="center">
                  {item}
                </Typography>
                <Typography variant="body2" align="center">
                  {getDescription(item)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

       
     
      
     
      <Typography variant="h4" gutterBottom color="primary" sx={{ mt: 4 }}>
        Nos offres
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} >
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


    </Container>
    <Footer />

    </Box>

  );
};

const getDescription = (item) => {
    switch(item) {
      case 'NOS VALEURS':
        return 'Éthique, Intégrité, Solidarité, Collaboration';
      case 'NOTRE MISSION':
        return 'Faciliter la vie quotidienne de nos clients';
      case 'NOTRE LEITMOTIV':
        return 'Sky is not the limit... your mind is';
      case 'NOTRE CULTURE D\'ENTREPRISE':
        return 'Donner le meilleur de soi';
      case 'NOTRE VISION':
        return 'Une qualité de service aux standards internationaux pour un groupe panafricain LEADER';
      default:
        return '';
    }
  };

export default AboutUs;