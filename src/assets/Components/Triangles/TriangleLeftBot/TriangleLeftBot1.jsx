import "../Triangle.css";
import WhitePiece1 from "../../Pieces/WhitePiece/WhitePiece1";
import WhitePiece2 from "../../Pieces/WhitePiece/WhitePiece2";
import WhitePiece3 from "../../Pieces/WhitePiece/WhitePiece3";
import WhitePiece4 from "../../Pieces/WhitePiece/WhitePiece4";
import WhitePiece5 from "../../Pieces/WhitePiece/WhitePiece5";
import React from "react";


const TriangleLeftBot1 = ({drop,dragOver}) => {

  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };


  return (
    <div
    id="12"
    className="card-area-bot"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <WhitePiece1></WhitePiece1>
      <WhitePiece2></WhitePiece2>
      <WhitePiece3></WhitePiece3>
      <WhitePiece4></WhitePiece4>
      <WhitePiece5></WhitePiece5>
    </div>
  );
};

export default TriangleLeftBot1;
