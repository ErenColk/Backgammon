import React from "react";
import "../Triangle.css";

const TraingleLeftTop3 = ({drop,dragOver}) => {
  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  return (
    <div
    id="15"
    className="card-area-top"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    ></div>
  );
};

export default TraingleLeftTop3;
