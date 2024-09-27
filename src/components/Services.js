import Header from './Header';
import Footer from './Footer';
import { Box, Button, Card, CardContent, CardMedia, Grid, styled, Typography } from '@mui/material';
import { BatterySaver, Start } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    px:4,


  
  }));
  
  const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    paddingTop: "56.25%",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    },
   sx:{
    objectFit: 'cover',
    backgroundPositionX:0
   },
  

  }));

const services = [
    {
      title: "Le recrutement",
      description:
        "Nous sélectionnons rigoureusement pour vous des meileurs profiles grâce à des méthodes de recrutemeent innovantes, notre processus de recrutement est conçut pour identifier les professionnels expérimentés, fiables et qualifiés.",
      image: "assets/recrutement1.jpg",
    },
    {
      title: "La formation",
      description:
        "Nous proposons des programmes de formation adaptés pour améliorer les compétences de vos employés de maison. Qu'il s'agisse de formation sur les fondammentaux du service à domicile, de l'entretient ménager à la gestion des enfants en passant par les compétances culinaires, nous vous aidons à développer une équipe professionnelle et efficace.",
      image: "assets/formation1.jpg",
    },
    {
      title: "La mise à disposition du personnel",
      description:
        "Il consiste à offrir aux clients le personnel recruté, formé et correspondant à leurs exigences et prêt à intégrer leurs emplois sous des contrats à court ou à long terme, selon vos besoins.",
      image: "assets/mise_dispo.jpg",
    },
    {
        title: "Le suivi et la gestion administrative",
        description:
          "Nous prenons en charge le suivi et la gestion administrative de vos employés de maison, incluant la préparation des contrats, la gestion des salaires, et le respect des obligations légales, simplifiant vos démarches administratives tout en assurant une gestion transparente et conforme.",
        image: "assets/conseil.jpg",
      },
      {
        title: "Reférent santé et sécurité au travail",
        description:
          "Nous désignons un référent santé et sécurité dédié pour vos employés de maison, garantissant que les normes de sécurité sont respectées dans votre domicile. Ce service permet d’évaluer et de prévenir les risques professionnels, tout en assurant un environnement de travail sécurisé pour vos employés.",
        image: "assets/santé1.avif",
      },
      {
        title: "Le conseil",
        description:
          "Nous offrons un service de conseil personnalisé pour optimiser la gestion de votre personnel mis à disposition. De l'organisation du planning à l'amélioration des relations professionnelles, nous vous accompagnons pour maximiser l'efficacité et la satisfaction au sein de votre horizon.",
        image: "assets/conseil1.jpg",
      }
  ];


const Services = () => {
    return (
        <>
         <Header/>
         <Box px={{xs:2, md:8}} py={7} mt={8}>

         <Typography variant="h5" align="left" mb={3} >
          Nos Services
        </Typography>
        <Grid container spacing={4}
         >
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <StyledCardMedia image={service.image} title={service.title} />
                <CardContent >
                  <Typography
                    mb={2}
                    variant="h6"
                    component="h2"
                    color={"#26a69a"}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {service.description}
                  </Typography>
                </CardContent>
                {/* <Box p={2} mt="auto">
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#f4511e" }}
                    size="small"
                    href="/contact"
                  >
                    En savoir +
                  </Button>
                </Box> */}
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        </Box>

 
          <Footer />
        </>
       
    );}

export default Services;