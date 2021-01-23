import React from "react";

export default function Sprites({
  sprites: { front_default },
  sprites: { front_shiny }
}) {
  console.trace("front_default", front_default);
  console.trace("front_shiny", front_shiny);
  return (
    <div className="PokeSprite">
      <img className="PokeImg" src={front_default} alt="Pokemon front" />
      <img className="PokeImg" src={front_shiny} alt="Pokemon shiny" />
    </div>
  );
}
