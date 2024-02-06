import React from "react";

const TriangleLeftBot4 = ({drop,dragOver}) => {

  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  return (
    <div
      id="4"
      className="card-area-bot"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    ></div>
  );
}

export default TriangleLeftBot4