
import React, { useContext } from "react";
import "../Triangle.css";


const TriangleRightTop4 = ({drop,dragOver}) => {
  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  

  return (
    <div
    id="22"
    className="card-area-top"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
   
    </div>
  );
}

export default TriangleRightTop4