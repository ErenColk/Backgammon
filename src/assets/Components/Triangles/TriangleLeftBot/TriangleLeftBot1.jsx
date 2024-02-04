import React, { useContext } from "react";
import "../Triangle.css";
import { PiecesContext } from "../../Context/PiecesContext";
import WhitePiece1 from "../../Pieces/WhitePiece/WhitePiece1";
import WhitePiece2 from "../../Pieces/WhitePiece/WhitePiece2";
import WhitePiece3 from "../../Pieces/WhitePiece/WhitePiece3";
import WhitePiece4 from "../../Pieces/WhitePiece/WhitePiece4";
import WhitePiece5 from "../../Pieces/WhitePiece/WhitePiece5";

const TriangleLeftBot1 = () => {
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
    <div id="left-bot-1" className="card-area-bot" onDrop={drop} onDragOver={dragOver}>
      <WhitePiece1></WhitePiece1>
      <WhitePiece2></WhitePiece2>
      <WhitePiece3></WhitePiece3>
      <WhitePiece4></WhitePiece4>
      <WhitePiece5></WhitePiece5>
    </div>
  );
};

export default TriangleLeftBot1;
