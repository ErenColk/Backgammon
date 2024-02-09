import React, { useContext } from 'react'
import { PiecesContext } from '../../Context/PiecesContext';

const TriangleRightBot3 = ({drop,dragOver}) => {

  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  

  return (
    <div
      id="3"
      className="card-area-bot"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
    </div>
  );
}

export default TriangleRightBot3