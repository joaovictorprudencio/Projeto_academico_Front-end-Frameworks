
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Rating
} from '@mui/material';
import { DeliveryDining, LocationOn } from '@mui/icons-material';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      height: '100%', 
      cursor: 'pointer', 
      transition: 'all 0.3s ease',
      '&:hover': { 
        boxShadow: 6,
        transform: 'translateY(-4px)'
      } 
    }}>
      <CardMedia
        component="img"
        height="160"
        image={restaurant.imagem}
        alt={restaurant.nome}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {restaurant.nome}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={restaurant.avaliacao} precision={0.1} size="small" readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {restaurant.avaliacao}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {restaurant.categoria}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <DeliveryDining fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {restaurant.tempoEntrega}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <LocationOn fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {restaurant.distancia}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip 
            label={`Frete: ${restaurant.frete}`} 
            size="small" 
            color="primary" 
            variant="outlined"
          />
          {restaurant.desconto && (
            <Chip 
              label={restaurant.desconto} 
              size="small" 
              color="success" 
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;