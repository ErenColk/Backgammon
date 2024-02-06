
import React from "react";

const TriangleLeftBot3 = ({drop,dragOver}) => {
  
  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  return (
    <div
      id="3"
      className="card-area-bot"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    ></div>
  );
}

export default TriangleLeftBot3