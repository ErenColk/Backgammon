import React, { useContext } from 'react'
import { PiecesContext } from '../../Context/PiecesContext';

const TriangleLeftBot3 = () => {
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
    </div>
  );
}

export default TriangleLeftBot3