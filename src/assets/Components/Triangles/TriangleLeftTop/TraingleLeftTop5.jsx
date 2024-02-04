
import React, { useContext } from "react";
import "../Triangle.css";
import WhitePiece13 from "../../Pieces/WhitePiece/WhitePiece13";
import WhitePiece14 from "../../Pieces/WhitePiece/WhitePiece14";
import WhitePiece15 from "../../Pieces/WhitePiece/WhitePiece15";
import { PiecesContext } from "../../Context/PiecesContext";

const TraingleLeftTop5 = () => {
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
      <WhitePiece13></WhitePiece13>
      <WhitePiece14></WhitePiece14>
      <WhitePiece15></WhitePiece15>
   
    </div>
  );
}

export default TraingleLeftTop5