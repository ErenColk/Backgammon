
import React from "react";
import "../Triangle.css";
import WhitePiece8 from "../../Pieces/WhitePiece/WhitePiece8";
import WhitePiece9 from "../../Pieces/WhitePiece/WhitePiece9";
import WhitePiece10 from "../../Pieces/WhitePiece/WhitePiece10";
import WhitePiece11 from "../../Pieces/WhitePiece/WhitePiece11";
import WhitePiece12 from "../../Pieces/WhitePiece/WhitePiece12";
const TriangleRightTop1 = ({drop,dragOver}) => {
  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  return (
    <div
    id="19"
    className="card-area-top"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
     <WhitePiece8></WhitePiece8>
     <WhitePiece9></WhitePiece9>
     <WhitePiece10></WhitePiece10>
     <WhitePiece11></WhitePiece11>
     <WhitePiece12></WhitePiece12>
   
    </div>
  );
}

export default TriangleRightTop1



