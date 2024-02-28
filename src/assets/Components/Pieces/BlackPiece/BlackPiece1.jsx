import React, { useContext, useEffect, useRef, useState } from "react";
import { PiecesContext } from "../../Context/PiecesContext";
import "../BlackPiece.css";
import { DiceContext } from "../../../Context/DiceContext";
import { MoveContext } from "../../../Context/MoveContext";

const BlackPiece1 = () => {
  const { piece, setPiece } = useContext(PiecesContext);
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
  const thirdSelectedTriangle = useRef(null);
  const fourthSelectedTriangle = useRef(null);

  const dragStart = (e) => {
    console.log("DRAG START ÇALIŞTI!");
    const target = e.target;
    setPiece(target);
    setWrongMove(false);
    setPrevParentNode(e.target.parentNode);
    changeTriangleColor(e, true);
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

      if (dice1 === dice2) {
        secondSelectedTriangle.current = document.getElementById(
          `${parseInt(parentId, 10) - parseInt(dice2, 10) * 2}`
        );
        thirdSelectedTriangle.current = document.getElementById(
          `${parseInt(parentId, 10) - parseInt(dice1, 10) * 3}`
        );
        fourthSelectedTriangle.current = document.getElementById(
          `${parseInt(parentId, 10) - parseInt(dice1, 10) * 4}`
        );
      }
    }
  };

  const showMoveMade = () => {
    if (firstDicePlayer.current == "true") {
      firstSelectedTriangle.current = document.getElementById(
        `${parseInt(prevParentId, 10) - parseInt(dice1, 10)}`
      );
      firstDicePlayer.current = false;
      setMoveCount((prevCount) => prevCount + 1);
    } else if (secondDicePlayer.current == "true") {
      secondSelectedTriangle.current = document.getElementById(
        `${parseInt(prevParentId, 10) - parseInt(dice2, 10)}`
      );
      secondDicePlayer.current = false;
      setMoveCount((prevCount) => prevCount + 1);
    }


    
  };

  const selectedPaintTriangles = () => {
    firstSelectedTriangle.current &&
      (firstSelectedTriangle.current.style.backgroundColor =
        "rgba(247, 173, 62, 0.5)");
    secondSelectedTriangle.current &&
      (secondSelectedTriangle.current.style.backgroundColor =
        "rgba(247, 173, 62, 0.5)");
    console.log(
      "🚀 ~ selectedPaintTriangles ~ thirdSelectedTriangle.current:",
      thirdSelectedTriangle.current
    );
    thirdSelectedTriangle.current &&
      (thirdSelectedTriangle.current.style.backgroundColor =
        "rgba(247, 173, 62, 0.5)");
    fourthSelectedTriangle.current &&
      (fourthSelectedTriangle.current.style.backgroundColor =
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
  console.log("🚀 ~ markDice ~ parentId:", parentId)


    if (
      parseInt(prevParentId, 10) - parseInt(dice1, 10) ===
      parseInt(parentId, 10)
    ) {
      secondDicePlayer.current = "true";
    } else if (
      parseInt(prevParentId, 10) - parseInt(dice2, 10) ===
      parseInt(parentId, 10)
    ) {
      firstDicePlayer.current = "true";
    } else {
      setWrongMove(true);
    }
  };

  const dragEnd = (e) => {
    const parentDiv = e.target.parentNode;
    const parentId = parentDiv.id;

    if (e.target.parentNode.classList.contains("out-circle-dark")) {
      setWrongMove(true);
    }
    markDice(parentId);
    changeTriangleColor(e, false);

    firstSelectedTriangle.current = null;
    secondSelectedTriangle.current = null;
    thirdSelectedTriangle.current = null;
    fourthSelectedTriangle.current = null;
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
      id="s-1"
      className="out-circle-dark"
      draggable={stop ? "false" : blackThrew ? "false" : "true"}
      {...dragEvents}
    ></div>
  );
};

export default BlackPiece1;
