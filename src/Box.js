import React from "react";

export default function (props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "#cccccc",
  };

  return <div className="box" style={styles} />;
}
