import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../components/Footer';


const restaurantes = [
  {
    id: 1,
    nome: "McDonald's",
    categoria: "Lanches • Americana",
    tempoEntrega: "20-30 min",
    avaliacao: 4.5,
    imagem: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=200&fit=crop",
    frete: "R$ 5,99",
    distancia: "1.2 km",
    desconto: "10% off"
  },
  {
    id: 2,
    nome: "Outback Steakhouse",
    categoria: "Carnes • Australiana",
    tempoEntrega: "35-45 min",
    avaliacao: 4.8,
    imagem: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=200&fit=crop",
    frete: "R$ 8,99",
    distancia: "2.5 km",
    desconto: "15% off"
  },
  {
    id: 3,
    nome: "Sushi Yama",
    categoria: "Japonesa • Sushi",
    tempoEntrega: "25-35 min",
    avaliacao: 4.7,
    imagem: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=200&fit=crop",
    frete: "R$ 6,99",
    distancia: "1.8 km"
  },
  {
    id: 4,
    nome: "Pizza Hut",
    categoria: "Pizza • Italiana",
    tempoEntrega: "30-40 min",
    avaliacao: 4.3,
    imagem: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=200&fit=crop",
    frete: "R$ 7,99",
    distancia: "3.1 km",
    desconto: "20% off"
  },
  {
    id: 5,
    nome: "Burger King",
    categoria: "Lanches • Hamburguer",
    tempoEntrega: "15-25 min",
    avaliacao: 4.2,
    imagem: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=200&fit=crop",
    frete: "R$ 4,99",
    distancia: "0.9 km"
  },
  {
    id: 6,
    nome: "China in Box",
    categoria: "Chinesa • Oriental",
    tempoEntrega: "40-50 min",
    avaliacao: 4.4,
    imagem: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=200&fit=crop",
    frete: "R$ 9,99",
    distancia: "4.2 km",
    desconto: "12% off"
  }
];

const RestaurantsPage = () => {
  return (
    <div>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          🍔 Restaurantes
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Descobre os melhores restaurantes perto de você
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {restaurantes.map((restaurante) => (
          <Grid item xs={12} sm={6} md={4} key={restaurante.id}>
            <RestaurantCard restaurant={restaurante} />
          </Grid>
        ))}
      </Grid>
    </Container>
    <Footer/>
    </div>
  );
};

export default RestaurantsPage;