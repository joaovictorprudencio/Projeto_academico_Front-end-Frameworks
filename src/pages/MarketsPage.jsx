import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import MarketCard from '../components/MarkedCard';
import Footer from '../components/Footer';

const mercados = [
  {
    id: 1,
    nome: "Carrefour",
    tipo: "Hipermercado • Variedades",
    tempoEntrega: "30-45 min",
    avaliacao: 4.6,
    numAvaliacoes: "3.5k",
    imagem: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=200&fit=crop",
    taxaEntrega: "R$ 7,99",
    distancia: "1.2 km",
    desconto: "10% primeira compra",
    entregaRapida: true,
    retirada: true
  },
  {
    id: 2,
    nome: "Pão de Açúcar",
    tipo: "Supermercado • Premium",
    tempoEntrega: "35-50 min",
    avaliacao: 4.7,
    numAvaliacoes: "2.8k",
    imagem: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop",
    taxaEntrega: "R$ 8,50",
    distancia: "1.8 km",
    desconto: "Frete grátis +R$150",
    entregaRapida: true,
    retirada: true
  },
  {
    id: 3,
    nome: "Extra",
    tipo: "Supermercado • Atacado",
    tempoEntrega: "40-55 min",
    avaliacao: 4.5,
    numAvaliacoes: "4.1k",
    imagem: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=200&fit=crop",
    taxaEntrega: "R$ 6,99",
    distancia: "2.5 km",
    desconto: "5% cashback",
    retirada: true
  },
  {
    id: 4,
    nome: "Mercado Municipal",
    tipo: "Hortifruti • Frescos",
    tempoEntrega: "25-40 min",
    avaliacao: 4.8,
    numAvaliacoes: "1.9k",
    imagem: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=200&fit=crop",
    taxaEntrega: "R$ 5,50",
    distancia: "0.7 km",
    desconto: "Produtos frescos",
    entregaRapida: true
  },
  {
    id: 5,
    nome: "Dia Supermercado",
    tipo: "Supermercado • Econômico",
    tempoEntrega: "20-35 min",
    avaliacao: 4.3,
    numAvaliacoes: "2.3k",
    imagem: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=400&h=200&fit=crop",
    taxaEntrega: "R$ 4,99",
    distancia: "0.9 km",
    aberto24h: true,
    entregaRapida: true,
    retirada: true
  },
  {
    id: 6,
    nome: "Zona Sul",
    tipo: "Supermercado • Qualidade",
    tempoEntrega: "30-45 min",
    avaliacao: 4.7,
    numAvaliacoes: "1.7k",
    imagem: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=200&fit=crop",
    taxaEntrega: "R$ 9,99",
    distancia: "2.1 km",
    desconto: "15% orgânicos",
    entregaRapida: true,
    retirada: true
  },
  {
    id: 7,
    nome: "Oxxo",
    tipo: "Conveniência • 24h",
    tempoEntrega: "15-25 min",
    avaliacao: 4.2,
    numAvaliacoes: "1.4k",
    imagem: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&h=200&fit=crop",
    taxaEntrega: "R$ 3,99",
    distancia: "0.3 km",
    aberto24h: true,
    entregaRapida: true
  },
  {
    id: 8,
    nome: "Assaí Atacadista",
    tipo: "Atacado • Atacarejo",
    tempoEntrega: "50-70 min",
    avaliacao: 4.4,
    numAvaliacoes: "3.2k",
    imagem: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=400&h=200&fit=crop",
    taxaEntrega: "R$ 12,99",
    distancia: "3.5 km",
    desconto: "Atacado +10% off",
    retirada: true
  }
];

const MarketsPage = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
            🛒 Mercados
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Faça suas compras com entrega rápida em casa
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {mercados.map((mercado) => (
            <Grid item xs={12} sm={6} md={4} key={mercado.id}>
              <MarketCard market={mercado} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
};

export default MarketsPage;