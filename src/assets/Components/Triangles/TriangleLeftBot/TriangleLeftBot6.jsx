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
      id="left-bot-2"
      className="card-area-bot"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    ></div>
  );
};

export default TriangleLeftBot6;
