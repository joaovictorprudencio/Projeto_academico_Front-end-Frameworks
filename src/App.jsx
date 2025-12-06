import Home from "./pages/Home";
import Products from "./pages/products";
import "./App.css";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import  Header  from "./components/Header";
import RestaurantsPage from "./pages/RestaurantsPage";
import PharmaciesPage from "./pages/PharmaciesPage";
import MarketsPage from "./pages/MarketsPage";
import CartPage from "./pages/CartPage"

function App() {
  return (
    <>
         <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurantes" element={<RestaurantsPage />} />
         <Route path="/farmacias" element={<PharmaciesPage />} />
         <Route path="/mercados" element={<MarketsPage />} />
         <Route path="/carrinho" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
