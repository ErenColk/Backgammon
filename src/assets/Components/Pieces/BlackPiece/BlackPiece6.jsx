import React, { useContext } from 'react'
import { PiecesContext } from '../../Context/PiecesContext';
import "../BlackPiece.css"
import { DiceContext } from '../../../Context/DiceContext';


const BlackPiece6 = () => {
  const { setPiece } = useContext(PiecesContext);
  const {blackThrew} = useContext(DiceContext)

  const dragStart = (e) => {
    const target = e.target;
    setPiece(target);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragEnd = (e) => {
    e.stopPropagation();
  };

  

  return (
    <div
      id="piece-6"
      className="out-circle-dark"
      draggable={blackThrew ? "false": "true"}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
    >
      <div className="in-circle-dark" draggable="false"></div>
    </div>
  );
}

export default BlackPiece6