import Home from "./pages/Home";
import Items from "./pages/Iten";
import Products from "./pages/products";
import "./App.css";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import  Header  from "./components/Header";


function App() {
  return (
    <>
         <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itens" element={<Items />} />
        <Route path="/contato" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
