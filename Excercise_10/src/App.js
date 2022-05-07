import React, { useState, useEffect } from "react";
import Names from "./components/Name";
import Results from "./components/Results";
function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [clickedUrl, setClickedUrl] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => setCharacters(data.results))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      {error && <h1>{error.message}</h1>}
      <Names characters={characters} setClicked={setClickedUrl} />
      {clickedUrl && <Results clicked={clickedUrl} />}
    </div>
  );
}

export default App;
