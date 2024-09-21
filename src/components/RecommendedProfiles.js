import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
  Pagination,
  Rating,
  Dialog,
  DialogContent,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
} from "@mui/material";
import { AllInbox, CenterFocusStrong } from "@mui/icons-material";

const ITEMS_PER_PAGE = 8;

const ProfileModal = ({ open, onClose, profile }) => {
  if (!profile) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Avatar
              src={profile.image}
              alt={profile.name}
              sx={{ width: 200, height: 200, margin: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              {profile.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {profile.job}
            </Typography>
            <Typography variant="body1" paragraph>
              {profile.description}
            </Typography>
            <Typography variant="body2">Âge : {profile.age} ans</Typography>
            <Typography variant="body2">Ville : {profile.city}</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Expérience :
            </Typography>
            <List>
              {profile.experience?.map((exp, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={exp.role}
                    secondary={`${exp.duration}`}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Compétences :
            </Typography>
            <List>
              {profile.skills?.map((skill, index) => (
                <ListItem key={index}>
                  <ListItemText primary={skill} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Références :
        </Typography>
        <List>
          {profile.references?.map((ref, index) => (
            <ListItem key={index}>
              <ListItemText primary={ref.name} secondary={ref.comment} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

const RecommendedProfiles = ({ profiles, isLoading }) => {
  const [page, setPage] = useState(1);
  const [openProfilView, setOpenProfilView] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!profiles || profiles.length === 0) {
    return (
      <Typography align="center">
        Aucun profil disponible pour le moment.
      </Typography>
    );
  }

  const pageCount = Math.ceil(profiles.length / ITEMS_PER_PAGE);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleOpenProfile = (profile) => {
    setSelectedProfile(profile);
    setOpenProfilView(true);
  };

  const handleCloseProfile = () => {
    setSelectedProfile(null);
  };

  const paginatedProfiles = profiles.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Profils recommandés
      </Typography>
      <Grid container spacing={4}>
        {paginatedProfiles.map((profile, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="200"
                image={profile.image}
                alt={`Photo de ${profile.name}`}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {profile.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {profile.job}, {profile.age} ans
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {profile.city}
                </Typography>
                <Rating value={profile.rating} readOnly sx={{ my: 1 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleOpenProfile(profile)}
                  >
                    Voir le profil
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    href="https://wa.me/237655223600?text=Bonjour bienvenue chez Coprodis, que pouvons nous faire pour vous ?"
                  >
                    Réserver
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>

      {openProfilView ? (
        <ProfileModal
          open={openProfilView}
          onClose={handleCloseProfile}
          profile={selectedProfile}
        />
      ) : (
        ""
      )}

      <Box sx={{ bgcolor: "background.paper", py: 8, textAlign: 'center' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Vous ne trouver pas un service qui répond à votre besoin ? <br />
          Personnalisez votre besoin, écrivez nous
        </Typography>
        
        <a aria-label="Chat on WhatsApp" href="https://wa.me/237655223600?text=Bonjour bienvenue chez Coprodis, que pouvons nous faire pour vous ?" >
          <img alt="Chat on WhatsApp" src="assets/WhatsAppButtonGreenMedium.png"/>
        </a>
      </Box>
    </Container>
  );
};

export default RecommendedProfiles;
