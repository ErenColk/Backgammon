import React, { useContext } from 'react'
import { PiecesContext } from '../../Context/PiecesContext';
import BlackPiece4 from '../../Pieces/BlackPiece/BlackPiece4';
import BlackPiece5 from '../../Pieces/BlackPiece/BlackPiece5';
import BlackPiece6 from '../../Pieces/BlackPiece/BlackPiece6';
import BlackPiece7 from '../../Pieces/BlackPiece/BlackPiece7';
import BlackPiece8 from '../../Pieces/BlackPiece/BlackPiece8';

const TriangleRightBot6 = () => {
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
    <div id="left-bot-2" className="card-area-bot" onDrop={drop} onDragOver={dragOver}>
        <BlackPiece4></BlackPiece4>
      <BlackPiece5></BlackPiece5>
      <BlackPiece6></BlackPiece6>
      <BlackPiece7></BlackPiece7>
      <BlackPiece8></BlackPiece8>
    </div>
  );
}

export default TriangleRightBot6