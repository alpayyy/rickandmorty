import React, { useState } from 'react';
import {
  CardMedia,
  IconButton,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,

}
 from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CharacterCard = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ width: '150px' }}>
      <CardMedia
        component="img"
        alt="character"
        height="140"
        image={character.image}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.gender} {character.status}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          onClick={toggleFavorite}
        >
          <FavoriteIcon color={isFavorite ? 'error' : 'inherit'} />
        </IconButton>
        <Button size="small" variant="text">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CharacterCard;
