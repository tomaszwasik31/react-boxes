import React from "react";
import "./App.css";
import Box from "./Box";
import boxes from "./boxes";

   

function App() {
  
  const [box, setBox] = React.useState(boxes);

  const boxElements = box.map((square) => (
    <Box key={square.id} on={square.on} />
  ));
  return <div className="box--wrapper">{boxElements}</div>;
}

export default App;
