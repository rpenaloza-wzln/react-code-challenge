import React from "react";
import "./styles.css";
import PokeCard from "./components/PokeCard";
import { mockPokemonData } from "./mock/pokeData";

export default function App() {
  return (
    <div className="App">
      <h1>React Mini Challenge</h1>
      <PokeCard poekmonInfo={mockPokemonData} />
    </div>
  );
}
