import React, { useContext } from "react";
import "../Triangle.css";
import { PiecesContext } from "../../Context/PiecesContext";
import BlackPiece11 from "../../Pieces/BlackPiece/BlackPiece11";
import BlackPiece12 from "../../Pieces/BlackPiece/BlackPiece12";
import BlackPiece13 from "../../Pieces/BlackPiece/BlackPiece13";
import BlackPiece14 from "../../Pieces/BlackPiece/BlackPiece14";
import BlackPiece15 from "../../Pieces/BlackPiece/BlackPiece15";

const TraingleLeftTop1 = () => {
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
      <BlackPiece11></BlackPiece11>
      <BlackPiece12></BlackPiece12>
      <BlackPiece13></BlackPiece13>
      <BlackPiece14></BlackPiece14>
      <BlackPiece15></BlackPiece15>
   
    </div>
  );
}



export default TraingleLeftTop1

















