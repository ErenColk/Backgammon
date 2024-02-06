import React, { useContext, useEffect, useState } from "react";
import { PiecesContext } from "../../Context/PiecesContext";
import "../BlackPiece.css";
import { DiceContext } from "../../../Context/DiceContext";
import { MoveContext } from "../../../Context/MoveContext";

const BlackPiece1 = () => {
  const { setPiece } = useContext(PiecesContext);
  const { blackThrew } = useContext(DiceContext);
 
  const {stop} = useContext(MoveContext)

  const dragStart = (e) => {
    const target = e.target;
    setPiece(target);
    console.log("dragstart ")
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

 
  const dragEnd = (e) => {
    e.stopPropagation();
  };

  const dragEvents = stop ?  {} : (!blackThrew
    ? {
        onDragStart: dragStart,
        onDragEnd: dragEnd,
      }
    : {});

  return (
    <div
      id="s-1"
      className="out-circle-dark"
      draggable={ stop ? "false" : (blackThrew ? "false" : "true")}
      {...dragEvents}
    >
      
    </div>
  );
};

export default BlackPiece1;
