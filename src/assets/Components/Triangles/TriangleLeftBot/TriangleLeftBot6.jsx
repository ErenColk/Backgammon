import React from "react";


const TriangleLeftBot6 = ({drop,dragOver}) => {
 
  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  return (
    <div
    id="7"
    className="card-area-bot"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    ></div>
  );
};

export default TriangleLeftBot6;
