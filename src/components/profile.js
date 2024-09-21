import React from 'react';
import {
    Box, Card, CardContent, Avatar, Typography, Button, Grid, List, ListItem, ListItemIcon, ListItemText,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Rating, TextField, Chip
  } from '@mui/material';
 
  
import { Person, Work, Star, Schedule, LocationOn, Euro } from '@mui/icons-material';

const ProfileDetail = ({ profile }) => {
    if (!profile) {
      return <Typography>Aucun profil à afficher</Typography>;
    }
  
    return (
      <Card sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar src={profile.image} sx={{ width: 100, height: 100, mr: 2 }} />
            <Box>
              <Typography variant="h4">{profile.name}</Typography>
              <Typography variant="subtitle1" color="text.secondary">{profile.job}</Typography>
              <Rating value={profile.rating} readOnly />
            </Box>
            <Box flexGrow={1} />
            <Button variant="contained" color="success">Contacter</Button>
          </Box>
  

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
              <Person sx={{ mr: 1 }} /> À propos
            </Typography>
            <Typography variant="body2">
              Professionnelle expérimentée avec 10 ans d'expérience dans le nettoyage et l'entretien de maisons et d'appartements. Je suis passionnée par mon travail et je m'efforce toujours de dépasser les attentes de mes clients...
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
              <Work sx={{ mr: 1 }} /> Expérience
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText 
                  primary="Femme de ménage chez Famille Martin (2015-2023)"
                  secondary="Entretien régulier de la maison"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Assistante de nettoyage chez CleanPro (2010-2015)"
                  secondary="Nettoyage de bureaux et espaces commerciaux"
                />
              </ListItem>
            </List>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
              <Star sx={{ mr: 1 }} /> Compétences
            </Typography>
            <Box>
              {['Nettoyage en profondeur', 'Repassage', 'Organisation', 'Entretien du linge'].map((skill) => (
                <Chip key={skill} label={skill} sx={{ m: 0.5 }} />
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box mt={2}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <Schedule sx={{ mr: 1 }} /> Disponibilité
          </Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Jour</TableCell>
                  <TableCell>Horaires</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'].map((day) => (
                  <TableRow key={day}>
                    <TableCell>{day}</TableCell>
                    <TableCell>9h - 17h</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box mt={2}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOn sx={{ mr: 1 }} /> Disponibilité géographique
          </Typography>
          <Box>
            {['Paris', 'Banlieue parisienne'].map((location) => (
              <Chip key={location} label={location} sx={{ m: 0.5 }} />
            ))}
          </Box>
        </Box>

        <Box mt={2}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <Euro sx={{ mr: 1 }} /> Tarifs
          </Typography>
          <Typography variant="body2">
            Tarif horaire de base : 20€ / heure. Tarifs personnalisés disponibles pour les contrats réguliers...
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography variant="h6">Noter et laisser un avis</Typography>
          <Rating name="user-rating" />
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Laissez votre avis ici..."
            variant="outlined"
            sx={{ mt: 1 }}
          />
          <Button variant="contained" sx={{ mt: 1 }}>Soumettre</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileDetail;