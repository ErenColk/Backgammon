import React, { useContext } from "react";

import { PiecesContext } from "../../Context/PiecesContext";

const WhitePiece11 = () => {
  const {  setPiece } = useContext(PiecesContext);

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


  return (
    <div
      id="piece-11"
      className="out-circle"
      draggable="true"
      onDragStart={dragStart}
      onDragEnd={dragEnd}
    >
      <div className="in-circle"></div>
    </div>
  );
};

export default WhitePiece11;
