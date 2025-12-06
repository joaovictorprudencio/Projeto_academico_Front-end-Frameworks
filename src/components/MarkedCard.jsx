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
import { ShoppingCart, AccessTime, Directions, LocalGroceryStore } from '@mui/icons-material';

const MarketCard = ({ market }) => {
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
        image={market.imagem}
        alt={market.nome}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {market.nome}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={market.avaliacao} precision={0.1} size="small" readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {market.avaliacao} ({market.numAvaliacoes})
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {market.tipo}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <AccessTime fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {market.tempoEntrega}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Directions fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {market.distancia}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
          {market.entregaRapida && (
            <Chip 
              label="Entrega Rápida" 
              size="small" 
              color="primary" 
              variant="filled"
            />
          )}
          {market.aberto24h && (
            <Chip 
              label="24 horas" 
              size="small" 
              color="secondary" 
              variant="outlined"
            />
          )}
          {market.retirada && (
            <Chip 
              label="Retirada" 
              size="small" 
              color="info" 
              variant="outlined"
            />
          )}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip 
            label={`Entrega: ${market.taxaEntrega}`} 
            size="small" 
            color="primary" 
            variant="outlined"
          />
          {market.desconto && (
            <Chip 
              label={market.desconto} 
              size="small" 
              color="success" 
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MarketCard;