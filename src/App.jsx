import React from "react";
import "./App.css";
import Box from "./Box";
import boxes from "./boxes";

/**
 * Challenge: use setSquares to update the
 * correct square in the array.
 *
 * Make sure not to directly modify state!
 *
 * Hint: look back at the lesson on updating arrays
 * in state if you need a reminder on how to do this
 */

function App() {
  const [box, setBox] = React.useState(boxes);

  // function toggle(id) {
  //   setBox((prevBoxes) => {
  //     return prevBoxes.map((prevBox) => {
  //       if (prevBox.id === id) {
  //         return { ...prevBox, on: !prevBox.on };
  //       } else {
  //         return prevBox;
  //       }
  //     });
  //   });
  // }

  function toggle(id) {
    setBox((prevBox) => {
      return prevBox.map((box) => {
        return box.id === id ? { ...box, on: !box.on } : box;
      });
    });
  }

  const boxElements = box.map((square) => (
    <Box key={square.id} on={square.on} handleClick={() => toggle(square.id)} />
  ));

  return <div className="box--wrapper">{boxElements}</div>;
}
export default App;
