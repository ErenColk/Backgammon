import React, { useContext, useRef, useState } from 'react'
import { PiecesContext } from '../../Context/PiecesContext';
import "../BlackPiece.css"
import { DiceContext } from '../../../Context/DiceContext';
import { MoveContext } from '../../../Context/MoveContext';


const BlackPiece6 = () => {
  const { piece,setPiece } = useContext(PiecesContext);
  const { blackThrew, dice1, dice2 } = useContext(DiceContext);
  const {
    stop,
    moveMade,
    setMoveMade,
    prevParentNode,
    setPrevParentNode,
    wrongMove,
    setWrongMove,
    setMoveCount,
  } = useContext(MoveContext);
  const [prevParentId, setPrevParentId] = useState();
  const firstDicePlayer = useRef("false");
  const secondDicePlayer = useRef("false");
  const firstSelectedTriangle = useRef(null);
  const secondSelectedTriangle = useRef(null);
  
  const dragStart = (e) => {
    const target = e.target;
    setPiece(target);
    setWrongMove(false);
    setPrevParentNode(e.target.parentNode);
    changeTriangleColor(e, true);
    console.log("🚀 ~ BlackPiece1 ~ piece:", piece)
    console.log("🚀 ~ BlackPiece1 ~ secondDicePlayer:", secondDicePlayer)
    
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const showMoves = (parentId) => {
    if (!moveMade) {
      firstSelectedTriangle.current = document.getElementById(
        `${parseInt(parentId, 10) - parseInt(dice1, 10)}`
      );
      secondSelectedTriangle.current = document.getElementById(
        `${parseInt(parentId, 10) - parseInt(dice2, 10)}`
      );
    }
  };


  const showMoveMade = () => {
    if (firstDicePlayer.current == "true") {
      firstSelectedTriangle.current = document.getElementById(
        `${parseInt(prevParentId, 10) - parseInt(dice1, 10)}`
        );
        firstDicePlayer.current = false;
      setMoveCount((prevCount) => prevCount + 1)
      console.log("firste girdi");
    } else if (secondDicePlayer.current == "true") {
      secondSelectedTriangle.current = document.getElementById(
        `${parseInt(prevParentId, 10) - parseInt(dice2, 10)}`
      );
      secondDicePlayer.current = false;
      setMoveCount((prevCount) => prevCount + 1)
      console.log("seconda girdi");
    }
  };

  const selectedPaintTriangles = () => {
    firstSelectedTriangle.current &&
      (firstSelectedTriangle.current.style.backgroundColor =
        "rgba(247, 173, 62, 0.5)");

    secondSelectedTriangle.current &&
      (secondSelectedTriangle.current.style.backgroundColor =
        "rgba(247, 173, 62, 0.5)");
  };

  const changeTriangleColor = (e, startOrFinished) => {
    const parentDiv = e.target.parentNode;
    const parentId = parentDiv.id;
    setPrevParentId(parentId);

    firstSelectedTriangle.current = document.getElementById(`${parentId}`);
    secondSelectedTriangle.current = document.getElementById(`${parentId}`);
    showMoves(parentId);
    showMoveMade();

    if (startOrFinished) {
      selectedPaintTriangles();
    } else {
      clearTriangle();
      setMoveMade(false);
    }
  };

  const clearTriangle = () => {
    for (let index = 1; index <= 24; index++) {
      document.getElementById(`${parseInt(index)}`).style.backgroundColor = "";
    }
  };

  const markDice = (parentId) => {
    if (
      parseInt(prevParentId, 10) - parseInt(dice1, 10) ===
      parseInt(parentId, 10)
    ) {
      console.log("ilk zarı oynadı");
      secondDicePlayer.current = "true";
    } else if (
      parseInt(prevParentId, 10) - parseInt(dice2, 10) ===
      parseInt(parentId, 10)
    ) {
      console.log("ikinci zarı oynadı");
      firstDicePlayer.current = "true";
    } else {
      console.log("yanlış hamle set edildi");
      setWrongMove(true);
    }
  };

  const dragEnd = (e) => {
    const parentDiv = e.target.parentNode;
    const parentId = parentDiv.id;
    console.log("🚀 ~ dragEnd ~ parentId:", parentId);

    if (e.target.parentNode.classList.contains("out-circle-dark")) {

      setWrongMove(true);
    }

    markDice(parentId);

    changeTriangleColor(e, false);
    e.stopPropagation();
  };

  const dragEvents = stop
    ? {}
    : !blackThrew
    ? {
        onDragStart: dragStart,
        onDragEnd: dragEnd,
      }
    : {};


  return (
    <div
      id="s-6"
      className="out-circle-dark"
      draggable={ stop ? "false" : (blackThrew ? "false" : "true")}
      {...dragEvents}
    >
      
    </div>
  );
}

export default BlackPiece6