
import React, { useContext } from "react";
import "../Triangle.css";


const TriangleRightTop5 = ({drop,dragOver}) => {
  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  

  return (
    <div
      id="left-bot-2"
      className="card-area-top"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
    </div>
  );
}

export default TriangleRightTop5