import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const  Header = () => {
  return (
    <AppBar position="static"
    sx={{
        
    }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Cardápio Online
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/itens">
          Itens
        </Button>
        <Button color="inherit" component={RouterLink} to="/produtos">
          Produtos
        </Button>
      </Toolbar>
    </AppBar> 
  );
}

export default Header
