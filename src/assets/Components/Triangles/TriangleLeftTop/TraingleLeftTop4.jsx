import React from "react";
import "../Triangle.css";

const TraingleLeftTop4 = ({drop,dragOver}) => {
  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  return (
    <div
    id="16"
    className="card-area-top"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    ></div>
  );
};

export default TraingleLeftTop4;
