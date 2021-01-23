import React from "react";
import Sprites from "./Sprites";
export default function PokeCard({
  poekmonInfo: { name },
  poekmonInfo: { sprites },
  poekmonInfo: { video }
}) {
  //default video in case video is not defined
  video = video ? video : "https://youtu.be/dQw4w9WgXcQ";
  console.debug(`Creating PokeCard for Pokemon ${name}`);
  console.trace(`video Link ${video}`);
  return (
    <a href={video} target="_blank" rel="noreferrer">
      <div className="PokeCard">
        <h1>{name}</h1>
        <Sprites sprites={sprites} />
        <div className="infobox">
          {name},{name},{name},{name} ,{name} ,{name} ,{name} ,{name}
        </div>
      </div>
    </a>
  );
}
