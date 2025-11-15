
import Home from "./pages/Home"
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
function App() {


  return (
    <>
    <nav style={{ display: "flex", gap: 20, marginBottom: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Home />} />
        <Route path="/contato" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
