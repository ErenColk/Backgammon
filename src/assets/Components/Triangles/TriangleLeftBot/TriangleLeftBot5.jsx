import React from "react";

import BlackPiece1 from "../../Pieces/BlackPiece/BlackPiece1";
import BlackPiece2 from "../../Pieces/BlackPiece/BlackPiece2";
import BlackPiece3 from "../../Pieces/BlackPiece/BlackPiece3";


const TriangleLeftBot5 = ({drop,dragOver}) => {
  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };


  return (
    <div
    id="8"
    className="card-area-bot"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <BlackPiece1></BlackPiece1>
      <BlackPiece2></BlackPiece2>
      <BlackPiece3></BlackPiece3>
    </div>
  );
};

export default TriangleLeftBot5;
