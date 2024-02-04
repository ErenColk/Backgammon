import React, { useContext } from "react";
import "../Triangle.css";
import { PiecesContext } from "../../Context/PiecesContext";
import BlackPiece9 from "../../Pieces/BlackPiece/BlackPiece9";
import BlackPiece10 from "../../Pieces/BlackPiece/BlackPiece10";

const TriangleRightTop6 = () => {
  const { piece } = useContext(PiecesContext);

  const drop = (e) => {
    const target = piece;
    target.style.display = "block";
    e.target.appendChild(target);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card-area-top" onDrop={drop} onDragOver={dragOver}>
      <BlackPiece9></BlackPiece9>
      <BlackPiece10></BlackPiece10>
    </div>
  );
};

export default TriangleRightTop6;
