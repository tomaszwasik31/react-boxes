import React from "react";
import "./App.css";
import Box from "./Box";
import boxes from "./boxes";

/**
 * Challenge part 2:
 * 1. Create a separate component called "Box" and
 *    replace the `div` above with our <Box /> components
 * 2. Pass the Box component a prop called `on` with the
 *    value of the same name from the `boxes` objects
 * 3. In the Box component, apply dynamic styles to determine
 *    the backgroundColor of the box. If it's `on`, set the
 *    backgroundColor to "#222222". If off, set it to "none"
 */

function App() {
  
  const [box, setBox] = React.useState(boxes);

  const boxElements = box.map((square) => (
    <Box key={square.id} on={square.on} />
  ));
  return <div className="box--wrapper">{boxElements}</div>;
}

export default App;
