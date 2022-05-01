import React from "react";
import ReactDOM from "react-dom";
import products from "../data.js";
import Card from "./card.js";
import BottomSection from "./bottomSection.js";

function Main() {
  return (
    <main className="container">
      {products.map((product) => (
        <Card {...product} key={product.title} />
      ))}
    </main>
  );
}

function App() {
  return (
    <div>
      <Main />
      <BottomSection />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
