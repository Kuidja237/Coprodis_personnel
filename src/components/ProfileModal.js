import React, { useState } from 'react';
import { Button, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import ProfileModal from './ProfileModal';

const PersonnelList = ({ personnel }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleOpenProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseProfile = () => {
    setSelectedProfile(null);
  };

  return (
    <>
      <Grid container spacing={3}>
        {personnel.map((person) => (
          <Grid item xs={12} sm={6} md={4} key={person.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={person.image}
                alt={person.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {person.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {person.role}
                </Typography>
                <Button 
                  variant="outlined" 
                  size="small"
                  onClick={() => handleOpenProfile(person)}
                  sx={{ mt: 2 }}
                >
                  Voir le profil
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {selectedProfile && (
        <ProfileModal
          open={!!selectedProfile}
          onClose={handleCloseProfile}
          profile={selectedProfile}
        />
      )}
    </>
  );
};

export default PersonnelList;