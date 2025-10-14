import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Produtos from "./pages/Produtos";
import UsuarioDetalhe from "./pages/UsuarioDetalhe";
import Usuarios from "./pages/Usuarios";

function App() {
 
  return (
        <BrowserRouter>
            <nav>
              <Link to="/">Usuarios</Link> |{" "}
              <Link to="/produtos">Produtos</Link>
            </nav>

            <Routes>
              <Route path="/" element={<Usuarios />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/usuario/:id" element={<UsuarioDetalhe />} />
            </Routes>
      
      
      
      </BrowserRouter>
  )
}

export default App;
