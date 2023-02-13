import React from "react";

/**
 * Challenge: Create state controlling whether
 * this box is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 *
 * Create an event listener so when the box is clicked,
 * it toggles from "on" to "off".
 *
 * Goal: clicking each box should toggle it on and off.
 */
export default function (props) {
  const [boxState, isBoxOn] = React.useState(props.on);

  function toggle() {
    isBoxOn((prevBoxState) => !prevBoxState);
  }

  const styles = {
    backgroundColor: boxState ? "#222222" : "#cccccc",
  };

  return <div className="box" style={styles} onClick={toggle} />;
}
