import React from "react";
import "../Triangle.css";
import BlackPiece9 from "../../Pieces/BlackPiece/BlackPiece9";
import BlackPiece10 from "../../Pieces/BlackPiece/BlackPiece10";

const TriangleRightTop6 = ({drop,dragOver}) => {
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
      <BlackPiece9></BlackPiece9>
      <BlackPiece10></BlackPiece10>
    </div>
  );
};

export default TriangleRightTop6;
