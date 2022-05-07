import { useState, useEffect } from "react";

function Results({ clicked }) {
  const [clickedCharacter, setClickedCharacter] = useState([]);

  useEffect(() => {
    fetch(clicked)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.message);
      })
      .then((data) => setClickedCharacter(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [clicked]);

  return (
    <div className="results">
      <h1>{clickedCharacter.name}</h1>
      <img
        src={clickedCharacter.image}
        alt={clickedCharacter.name}
        className="img"
      />
      {/* <h1>Origin: {clickedCharacter.origin.name}</h1> */}
      <h1>Species: {clickedCharacter.species}</h1>
      <h1>Status: {clickedCharacter.status}</h1>
    </div>
  );
}

export default Results;
