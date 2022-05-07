import React, { useState, useEffect } from "react";

function Names({ characters, setClicked }) {
  function handleClick(e) {
    // Since event have no value on event, appearently, I'm taking
    //textContent and finding specific character with
    //Array filter method.
    const name = e.target.textContent;
    const char = characters.filter((char) => char.name === name);
    setClicked(char[0].url);
  }

  return (
    <div className="names">
      {characters
        .filter((char) => char.id <= 10)
        .map((character) => (
          <div key={character.id} className="character" onClick={handleClick}>
            <h3>{character.name}</h3>
          </div>
        ))}
    </div>
  );
}

export default Names;
