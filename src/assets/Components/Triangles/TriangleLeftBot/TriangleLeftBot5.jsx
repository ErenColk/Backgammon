import React, { useContext } from "react";
import { PiecesContext } from "../../Context/PiecesContext";
import BlackPiece1 from "../../Pieces/BlackPiece/BlackPiece1";
import BlackPiece2 from "../../Pieces/BlackPiece/BlackPiece2";
import BlackPiece3 from "../../Pieces/BlackPiece/BlackPiece3";
import { DiceContext } from "../../../Context/DiceContext";

const TriangleLeftBot5 = () => {
  const { piece } = useContext(PiecesContext);
  const { blackThrew } = useContext(DiceContext);
  const drop = (e) => {
    const target = piece;
    target.style.display = "block";
    e.target.appendChild(target);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEvents = !blackThrew
    ? {
        onDrop: drop,
        onDragOver: dragOver,
      }
    : {};

  return (
    <div id="left-bot-2" className="card-area-bot" {...dragEvents}>
      <BlackPiece1></BlackPiece1>
      <BlackPiece2></BlackPiece2>
      <BlackPiece3></BlackPiece3>
    </div>
  );
};

export default TriangleLeftBot5;
