
import React, { useContext } from "react";
import "../Triangle.css";
import { PiecesContext } from "../../Context/PiecesContext";

const TriangleRightTop2 = () => {
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
   
    </div>
  );
}

export default TriangleRightTop2