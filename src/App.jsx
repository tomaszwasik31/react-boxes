import React from "react";
import "./App.css";
import boxes from "./boxes";

/**
 * Challenge part 1:
 * 1. Initialize state with the default value of the
 *    array pulled in from boxes.js
 * 2. Map over that state array and display each one
 *    as an empty square (black border, transparent bg color)
 *    (Don't worry about using the "on" property yet)
 */

function App() {
  const [box, setBox] = React.useState(boxes);

 const boxElements =  box.map((square) => <div className="box" key={square.id} />);
  return <div className="box--wrapper">
    {boxElements}
  </div>
}

export default App;
