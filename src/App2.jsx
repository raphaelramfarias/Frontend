import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [likes, setLikes] = useState(0);
  const [input, setInput] = useState("Curtidas");
  const [ultimaHora, setUltimaHora] = useState("Curtidas");

  function darLike() {
    setLikes(likes + 1);
    setUltimaHora(new Date().toLocaleTimeString());
    console.log(likes);
  }

  function Resetar() {
    setInput("");
    setLikes(0);
    setUltimaHora("");
  }
  // Efeito Colateral
  useEffect(() => {
    document.title = `Digitado: ${input} - Likes: ${likes}`;
  }, [input, likes]);

  return (
    <>
      Numero de Caracteres: {input.length}
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <h1>Contador de Likes: {likes}</h1>
      <button onClick={darLike} disabled={likes >= 5}>
        {likes >= 5 ? "Limite de Likes Esgotado" : "Clicar"}
      </button>
      <button onClick={Resetar} style={{marginLeft: '10px'}}>Resetar</button>
      {likes >= 5 && <p>Você atingiu o limite de likes</p>}
      <p>Ultimo Like dado as: {ultimaHora || "Sem Clique"}</p>
    </>
  );
}

// para rodar o app.jsx
// export default App;
export default ProductList;