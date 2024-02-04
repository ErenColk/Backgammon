
import React, { useContext } from "react";
import "../Triangle.css";
import { PiecesContext } from "../../Context/PiecesContext";
import WhitePiece8 from "../../Pieces/WhitePiece/WhitePiece8";
import WhitePiece9 from "../../Pieces/WhitePiece/WhitePiece9";
import WhitePiece10 from "../../Pieces/WhitePiece/WhitePiece10";
import WhitePiece11 from "../../Pieces/WhitePiece/WhitePiece11";
import WhitePiece12 from "../../Pieces/WhitePiece/WhitePiece12";
const TriangleRightTop1 = () => {
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
     <WhitePiece8></WhitePiece8>
     <WhitePiece9></WhitePiece9>
     <WhitePiece10></WhitePiece10>
     <WhitePiece11></WhitePiece11>
     <WhitePiece12></WhitePiece12>
   
    </div>
  );
}

export default TriangleRightTop1



