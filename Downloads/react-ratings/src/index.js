import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";
import Rating from "./Rating";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Star color = "red" isFilled/>
      <Star color = "pink"/>
      <Star color = "purple" isFilled/>
      <h2> Rating Component</h2>
      <Rating stars= {4}/>
      <Rating stars= {0}/>
      <Star color = "pink"/>

    {/*  <h2>Star Components:</h2>
      <Star color="gold" isFilled />
      <Star color="gold" isFilled/>
      <Star color="gold" isFilled />
      <h2>Rating Component (uses Stars):</h2>
    <Rating stars={1} /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
