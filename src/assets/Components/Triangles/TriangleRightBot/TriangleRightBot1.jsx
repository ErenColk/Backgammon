import React from "react";
import WhitePiece6 from '../../Pieces/WhitePiece/WhitePiece6';
import WhitePiece7 from '../../Pieces/WhitePiece/WhitePiece7';

const TriangleRightBot1 = ({drop,dragOver}) => {

  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  

  return (
    <div
      id="1"
      className="card-area-bot"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <WhitePiece6></WhitePiece6>
      <WhitePiece7></WhitePiece7>
    </div>
  );
};

export default TriangleRightBot1;
