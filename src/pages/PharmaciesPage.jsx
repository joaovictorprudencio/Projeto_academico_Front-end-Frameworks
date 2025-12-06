import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import PharmacyCard from '../components/PharmacyCard';
import Footer from '../components/Footer';

const farmacias = [
  {
    id: 1,
    nome: "Drogaria São Paulo",
    tipo: "Farmácia • Perfumaria",
    horario: "24 horas",
    avaliacao: 4.7,
    numAvaliacoes: "1.2k",
    imagem: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
    taxaEntrega: "R$ 4,99",
    distancia: "0.8 km",
    desconto: "15% off",
    plantao: true,
    delivery: true
  },
  {
    id: 2,
    nome: "Raia Drogasil",
    tipo: "Farmácia • Conveniência",
    horario: "07:00 - 23:00",
    avaliacao: 4.6,
    numAvaliacoes: "2.1k",
    imagem: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=200&fit=crop",
    taxaEntrega: "R$ 5,99",
    distancia: "1.3 km",
    desconto: "10% off",
    plantao: false,
    delivery: true
  },
  {
    id: 3,
    nome: "Drogaria Pacheco",
    tipo: "Farmácia • Manipulação",
    horario: "08:00 - 22:00",
    avaliacao: 4.8,
    numAvaliacoes: "890",
    imagem: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=200&fit=crop",
    taxaEntrega: "R$ 6,50",
    distancia: "2.1 km",
    plantao: true,
    delivery: true
  },
  {
    id: 4,
    nome: "Farmácia Popular",
    tipo: "Farmácia Pública",
    horario: "08:00 - 18:00",
    avaliacao: 4.4,
    numAvaliacoes: "3.4k",
    imagem: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=400&h=200&fit=crop",
    taxaEntrega: "Grátis",
    distancia: "1.5 km",
    desconto: "Remédios Populares"
  },
  {
    id: 5,
    nome: "Drogaria Extra",
    tipo: "Farmácia • Cosméticos",
    horario: "07:30 - 21:30",
    avaliacao: 4.5,
    numAvaliacoes: "1.5k",
    imagem: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=200&fit=crop",
    taxaEntrega: "R$ 5,50",
    distancia: "0.5 km",
    desconto: "20% em perfumes",
    delivery: true
  },
  {
    id: 6,
    nome: "Farmácia de Manipulação",
    tipo: "Manipulação • Especializada",
    horario: "09:00 - 19:00",
    avaliacao: 4.9,
    numAvaliacoes: "420",
    imagem: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=200&fit=crop",
    taxaEntrega: "R$ 7,99",
    distancia: "3.2 km",
    plantao: false,
    delivery: true
  }
];

const PharmaciesPage = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
            💊 Farmácias
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Encontre farmácias próximas com entrega rápida
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {farmacias.map((farmacia) => (
            <Grid item xs={12} sm={6} md={4} key={farmacia.id}>
              <PharmacyCard pharmacy={farmacia} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
};

export default PharmaciesPage;