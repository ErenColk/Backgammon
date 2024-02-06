import React, { useContext } from "react";
import { PiecesContext } from "../../Context/PiecesContext";
import { DiceContext } from "../../../Context/DiceContext";
import { MoveContext } from "../../../Context/MoveContext";

const WhitePiece8 = () => {
  const {  setPiece } = useContext(PiecesContext);
  const { whiteThrew } = useContext(DiceContext);
  const {stop} = useContext(MoveContext)

  const dragStart = (e) => {
    const target = e.target;
    setPiece(target);
    console.log("dragstart ");
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragEnd = (e) => {
    e.stopPropagation();
  };

  const dragEvents = stop
    ? {}
    : !whiteThrew
    ? {
        onDragStart: dragStart,
        onDragEnd: dragEnd,
      }
    : {};

  return (
    <div
      id="w-8"
      className="out-circle"
      draggable={stop ? "false" : whiteThrew ? "false" : "true"}
      {...dragEvents}
    ></div>
  );
};

export default WhitePiece8;
