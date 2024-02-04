import React, { useContext } from "react";
import { PiecesContext } from "../../Context/PiecesContext";
import WhitePiece6 from '../../Pieces/WhitePiece/WhitePiece6';
import WhitePiece7 from '../../Pieces/WhitePiece/WhitePiece7';

const TriangleRightBot1 = () => {
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
    <div
      id="left-bot-2"
      className="card-area-bot"
      onDrop={drop}
      onDragOver={dragOver}
    >
      <WhitePiece6></WhitePiece6>
      <WhitePiece7></WhitePiece7>
    </div>
  );
};

export default TriangleRightBot1;
