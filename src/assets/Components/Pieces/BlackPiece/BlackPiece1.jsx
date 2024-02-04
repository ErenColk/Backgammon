import React, { useContext } from "react";
import { PiecesContext } from "../../Context/PiecesContext";
import "../BlackPiece.css";
import { DiceContext } from "../../../Context/DiceContext";

const BlackPiece1 = () => {
  const { setPiece } = useContext(PiecesContext);
  const { blackThrew } = useContext(DiceContext);

  const dragStart = (e) => {
    const target = e.target;
    setPiece(target);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragEnd = (e) => {
    e.stopPropagation();
  };

  const dragEvents = !blackThrew
    ? {
        onDragStart: dragStart,
        onDragEnd: dragEnd,
      }
    : {};

  return (
    <div
      id="piece-1"
      className="out-circle-dark"
      draggable={blackThrew ? "false" : "true"}
      {...dragEvents}
    >
      <div className="in-circle-dark" draggable="false"></div>
    </div>
  );
};

export default BlackPiece1;
