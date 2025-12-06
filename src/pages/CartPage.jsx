import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  IconButton,
  Divider,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Card,
  CardContent,
  Chip,
  Alert,
  Snackbar
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalShipping as ShippingIcon,
  Discount as DiscountIcon,
  ArrowBack as ArrowBackIcon,
  Payment as PaymentIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Arroz Integral 5kg',
      brand: 'Tio João',
      price: 24.90,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1592922015883-83b0c92d584c?w=150&h=150&fit=crop',
      category: 'Grãos',
      weight: '5kg'
    },
    {
      id: 2,
      name: 'Feijão Carioca',
      brand: 'Kicaldo',
      price: 8.90,
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1562162388-7a4c60c5f34f?w=150&h=150&fit=crop',
      category: 'Grãos',
      weight: '1kg'
    },
    {
      id: 3,
      name: 'Leite Integral',
      brand: 'Itambé',
      price: 5.50,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=150&h=150&fit=crop',
      category: 'Laticínios',
      weight: '1L'
    },
    {
      id: 4,
      name: 'Óleo de Soja',
      brand: 'Liza',
      price: 9.90,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1536939459926-301728717817?w=150&h=150&fit=crop',
      category: 'Condimentos',
      weight: '900ml'
    }
  ]);

  const [cupom, setCupom] = useState('');
  const [cupomAplicado, setCupomAplicado] = useState(false);
  const [cupomDesconto, setCupomDesconto] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  const taxaEntrega = subtotal > 100 ? 0 : 9.90;
  

  const descontoCupom = cupomAplicado ? cupomDesconto : 0;
  
 
  const total = subtotal + taxaEntrega - descontoCupom;

  const handleQuantityChange = (id, increment) => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + increment;
          if (newQuantity >= 1) {
            return { ...item, quantity: newQuantity };
          }
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
    setSnackbarMessage('Item removido do carrinho!');
    setOpenSnackbar(true);
  };

  const handleApplyCupom = () => {
    if (cupom.toUpperCase() === 'MERCADO10') {
      setCupomAplicado(true);
      setCupomDesconto(subtotal * 0.1); 
      setSnackbarMessage('Cupom aplicado com sucesso!');
    } else if (cupom.toUpperCase() === 'FRETEGRATIS') {
      setCupomAplicado(true);
      setCupomDesconto(taxaEntrega);
      setSnackbarMessage('Frete grátis aplicado!');
    } else {
      setSnackbarMessage('Cupom inválido!');
    }
    setOpenSnackbar(true);
  };

  const handleRemoveCupom = () => {
    setCupomAplicado(false);
    setCupomDesconto(0);
    setCupom('');
    setSnackbarMessage('Cupom removido!');
    setOpenSnackbar(true);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    navigate('/markets');
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleContinueShopping}
          sx={{ mb: 2 }}
        >
          Continuar Comprando
        </Button>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <ShoppingCartIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Box>
            <Typography variant="h4" component="h1" fontWeight="bold">
              Meu Carrinho
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'}
            </Typography>
          </Box>
        </Box>

        {cartItems.length === 0 ? (
          <Paper sx={{ p: 4, textAlign: 'center', mt: 4 }}>
            <ShoppingCartIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Seu carrinho está vazio
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Adicione produtos ao seu carrinho para finalizar a compra
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handleContinueShopping}
              startIcon={<ShoppingCartIcon />}
            >
              Continuar Comprando
            </Button>
          </Paper>
        ) : (
          <Grid container spacing={4}>
            {/* Lista de Itens */}
            <Grid item xs={12} md={8}>
              <Paper elevation={1} sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Itens do Carrinho
                </Typography>
                
                <List>
                  {cartItems.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <ListItem
                        secondaryAction={
                          <IconButton 
                            edge="end" 
                            aria-label="delete"
                            onClick={() => handleRemoveItem(item.id)}
                            color="error"
                          >
                            <DeleteIcon />
                          </IconButton>
                        }
                        sx={{ py: 2 }}
                      >
                        <ListItemAvatar>
                          <Avatar
                            variant="rounded"
                            src={item.image}
                            alt={item.name}
                            sx={{ width: 80, height: 80, mr: 2 }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" fontWeight="medium">
                              {item.name}
                            </Typography>
                          }
                          secondary={
                            <Box>
                              <Typography variant="body2" color="text.secondary">
                                {item.brand} • {item.weight}
                              </Typography>
                              <Chip 
                                label={item.category} 
                                size="small" 
                                sx={{ mt: 1 }}
                              />
                            </Box>
                          }
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                          <IconButton 
                            size="small" 
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography sx={{ mx: 2, minWidth: 30, textAlign: 'center' }}>
                            {item.quantity}
                          </Typography>
                          <IconButton 
                            size="small" 
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>
                        <Box sx={{ ml: 4, minWidth: 100, textAlign: 'right' }}>
                          <Typography variant="h6" color="primary">
                            R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            R$ {item.price.toFixed(2).replace('.', ',')} un.
                          </Typography>
                        </Box>
                      </ListItem>
                      {index < cartItems.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </Paper>

              <Paper elevation={1} sx={{ p: 3, mt: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  <DiscountIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Cupom de Desconto
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <TextField
                    fullWidth
                    placeholder="Digite seu cupom"
                    value={cupom}
                    onChange={(e) => setCupom(e.target.value)}
                    disabled={cupomAplicado}
                    size="small"
                  />
                  {cupomAplicado ? (
                    <Button 
                      variant="outlined" 
                      color="error"
                      onClick={handleRemoveCupom}
                    >
                      Remover
                    </Button>
                  ) : (
                    <Button 
                      variant="contained" 
                      onClick={handleApplyCupom}
                      disabled={!cupom.trim()}
                    >
                      Aplicar
                    </Button>
                  )}
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Cupons disponíveis: <strong>MERCADO10</strong> (10% off) • <strong>FRETEGRATIS</strong> (Frete grátis)
                  </Typography>
                </Box>
              </Paper>
            </Grid>

          
            <Grid item xs={12} md={4}>
              <Paper elevation={1} sx={{ p: 3, position: 'sticky', top: 20 }}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Resumo do Pedido
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} itens)
                    </Typography>
                    <Typography variant="body2">
                      R$ {subtotal.toFixed(2).replace('.', ',')}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      <ShippingIcon sx={{ fontSize: 16, verticalAlign: 'text-bottom', mr: 0.5 }} />
                      Taxa de entrega
                    </Typography>
                    <Typography variant="body2">
                      {taxaEntrega === 0 ? 'Grátis' : `R$ ${taxaEntrega.toFixed(2).replace('.', ',')}`}
                    </Typography>
                  </Box>

                  {cupomAplicado && (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" color="success.main">
                        <DiscountIcon sx={{ fontSize: 16, verticalAlign: 'text-bottom', mr: 0.5 }} />
                        Desconto
                      </Typography>
                      <Typography variant="body2" color="success.main">
                        - R$ {descontoCupom.toFixed(2).replace('.', ',')}
                      </Typography>
                    </Box>
                  )}

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Typography variant="h6">
                      Total
                    </Typography>
                    <Typography variant="h5" color="primary" fontWeight="bold">
                      R$ {total.toFixed(2).replace('.', ',')}
                    </Typography>
                  </Box>

                  {subtotal < 100 && (
                    <Alert severity="info" sx={{ mb: 2 }}>
                      Adicione mais R$ {(100 - subtotal).toFixed(2).replace('.', ',')} para ganhar frete grátis!
                    </Alert>
                  )}
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleCheckout}
                  startIcon={<PaymentIcon />}
                  sx={{ mb: 2, py: 1.5 }}
                >
                  Finalizar Compra
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleContinueShopping}
                  sx={{ py: 1.5 }}
                >
                  Continuar Comprando
                </Button>

                <Box sx={{ mt: 3, pt: 3, borderTop: 1, borderColor: 'divider' }}>
                  <Typography variant="body2" color="text.secondary" align="center">
                    Pagamento seguro • Entrega garantida • Devolução em 7 dias
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CartPage;