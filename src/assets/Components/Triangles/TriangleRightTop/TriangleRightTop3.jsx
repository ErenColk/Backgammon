
import React from "react";
import "../Triangle.css";


const TriangleRightTop3 = ({drop,dragOver}) => {
  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  

  return (
    <div
    id="21"
    className="card-area-top"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
   
    </div>
  );
}

export default TriangleRightTop3