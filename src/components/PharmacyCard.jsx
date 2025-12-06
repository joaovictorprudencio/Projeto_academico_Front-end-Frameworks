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
import { LocalPharmacy, AccessTime, Directions } from '@mui/icons-material';

const PharmacyCard = ({ pharmacy }) => {
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
        image={pharmacy.imagem}
        alt={pharmacy.nome}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {pharmacy.nome}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={pharmacy.avaliacao} precision={0.1} size="small" readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {pharmacy.avaliacao} ({pharmacy.numAvaliacoes} avaliações)
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {pharmacy.tipo}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <AccessTime fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {pharmacy.horario}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Directions fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {pharmacy.distancia}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
          {pharmacy.plantao && (
            <Chip 
              label="Plantão 24h" 
              size="small" 
              color="primary" 
              variant="filled"
            />
          )}
          {pharmacy.delivery && (
            <Chip 
              label="Delivery" 
              size="small" 
              color="secondary" 
              variant="outlined"
            />
          )}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip 
            label={`Taxa: ${pharmacy.taxaEntrega}`} 
            size="small" 
            color="primary" 
            variant="outlined"
          />
          {pharmacy.desconto && (
            <Chip 
              label={pharmacy.desconto} 
              size="small" 
              color="success" 
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PharmacyCard;