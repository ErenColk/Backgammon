import React from "react";
import "../Triangle.css";
import BlackPiece11 from "../../Pieces/BlackPiece/BlackPiece11";
import BlackPiece12 from "../../Pieces/BlackPiece/BlackPiece12";
import BlackPiece13 from "../../Pieces/BlackPiece/BlackPiece13";
import BlackPiece14 from "../../Pieces/BlackPiece/BlackPiece14";
import BlackPiece15 from "../../Pieces/BlackPiece/BlackPiece15";

const TraingleLeftTop1 = ({drop,dragOver}) => {
  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  return (
    <div
      id="13"
      className="card-area-top"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <BlackPiece11></BlackPiece11>
      <BlackPiece12></BlackPiece12>
      <BlackPiece13></BlackPiece13>
      <BlackPiece14></BlackPiece14>
      <BlackPiece15></BlackPiece15>
    </div>
  );
};

export default TraingleLeftTop1;
