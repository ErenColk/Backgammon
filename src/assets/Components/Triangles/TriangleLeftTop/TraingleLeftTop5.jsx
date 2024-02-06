import React from "react";
import "../Triangle.css";
import WhitePiece13 from "../../Pieces/WhitePiece/WhitePiece13";
import WhitePiece14 from "../../Pieces/WhitePiece/WhitePiece14";
import WhitePiece15 from "../../Pieces/WhitePiece/WhitePiece15";

const TraingleLeftTop5 = ({drop,dragOver}) => {
  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  return (
    <div
      id="left-bot-2"
      className="card-area-top"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <WhitePiece13></WhitePiece13>
      <WhitePiece14></WhitePiece14>
      <WhitePiece15></WhitePiece15>
    </div>
  );
};

export default TraingleLeftTop5;
