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
  const thirdDicePlayer = useRef("false");
  const fourthDicePlayer = useRef("false");

  const doubleNumberOfMoves = useRef(0);

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
      controlMove(`${parseInt(parentId, 10) - parseInt(dice1, 10)}`) === true &&  (firstSelectedTriangle.current = document.getElementById(
        `${parseInt(parentId, 10) - parseInt(dice1, 10)}`
      ));
      controlMove(`${parseInt(parentId, 10) - parseInt(dice2, 10)}`) === true && (secondSelectedTriangle.current = document.getElementById(
        `${parseInt(parentId, 10) - parseInt(dice2, 10)}`
      ));

      if (dice1 === dice2) {
        controlMove(`${parseInt(parentId, 10) - parseInt(dice2, 10) * 2}`) === true && (secondSelectedTriangle.current = document.getElementById(
          `${parseInt(parentId, 10) - parseInt(dice2, 10) * 2}`
        ));
        controlMove(`${parseInt(parentId, 10) - parseInt(dice1, 10) * 3}`) === true && (thirdSelectedTriangle.current = document.getElementById(
          `${parseInt(parentId, 10) - parseInt(dice1, 10) * 3}`
        ));
        controlMove( `${parseInt(parentId, 10) - parseInt(dice1, 10) * 4}`) === true && (fourthSelectedTriangle.current = document.getElementById(
          `${parseInt(parentId, 10) - parseInt(dice1, 10) * 4}`
        ));
      }
    }
  };

  // const showMoveMade = () => {
  //   if (firstDicePlayer.current == "true") {
      
  //     firstDicePlayer.current = false;
  //     setMoveCount((prevCount) => prevCount + 1);
  //   } else if (secondDicePlayer.current == "true") {
     
  //     secondDicePlayer.current = false;
  //     setMoveCount((prevCount) => prevCount + 1);

  //   } 

  // };

  const selectedPaintTriangles = () => {
        firstDicePlayer.current === "false" && ( firstSelectedTriangle.current &&
      (firstSelectedTriangle.current.style.backgroundColor =
        "rgba(247, 173, 62, 0.5)"));
        secondDicePlayer.current === "false" && (secondSelectedTriangle.current &&
      (secondSelectedTriangle.current.style.backgroundColor =
        "rgba(247, 173, 62, 0.5)"));
   
    thirdDicePlayer.current === "false" &&  (thirdSelectedTriangle.current &&
      (thirdSelectedTriangle.current.style.backgroundColor =
        "rgba(247, 173, 62, 0.5)"));
        fourthDicePlayer.current === "false"&&  (fourthSelectedTriangle.current &&
      (fourthSelectedTriangle.current.style.backgroundColor =
        "rgba(247, 173, 62, 0.5)"));
    };

  const changeTriangleColor = (e, startOrFinished) => {
    const parentDiv = e.target.parentNode;
    const parentId = parentDiv.id;
    setPrevParentId(parentId);

    firstSelectedTriangle.current = document.getElementById(`${parentId}`);
    secondSelectedTriangle.current = document.getElementById(`${parentId}`);
    showMoves(parentId);

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
    if(dice1=== dice2){
      if( (parseInt(prevParentId, 10) - parseInt(dice1, 10) ===
      parseInt(parentId, 10) ) &&  firstDicePlayer.current  === "false" &&(doubleNumberOfMoves.current <= 4 )){
        fourthDicePlayer.current = "true";
        doubleNumberOfMoves.current++;
        if(doubleNumberOfMoves.current === 2 ){
          thirdDicePlayer.current = "true";     
        }
        else if (doubleNumberOfMoves.current === 3){
          secondDicePlayer.current = "true";     
        }
        else if (doubleNumberOfMoves.current === 4){
          firstDicePlayer.current = "true";
        }

        doubleNumberOfMoves.current = 4 && setMoveCount((prevCount) => prevCount + 2);

        console.log("hamle sayısı",doubleNumberOfMoves.current)
        console.log("ilk 1. oynadı")
      }
      else if( (parseInt(prevParentId, 10) - parseInt(dice1*2, 10) ===
      parseInt(parentId, 10) ) &&  secondDicePlayer.current  === "false" &&(doubleNumberOfMoves.current < 5 )){
        doubleNumberOfMoves.current += 2;
      if(doubleNumberOfMoves.current === 4){
        firstDicePlayer.current = "true";
        secondDicePlayer.current ="true";
      }

        thirdDicePlayer.current = "true";
        fourthDicePlayer.current = "true";
        console.log("hamle sayısı",doubleNumberOfMoves.current)
        doubleNumberOfMoves.current = 4 && setMoveCount((prevCount) => prevCount + 2);

        console.log("ikinci 1. oynadı")
      }
      else if( (parseInt(prevParentId, 10) - parseInt(dice1*3, 10) ===
      parseInt(parentId, 10) ) &&  thirdDicePlayer.current  === "false"){
        fourthDicePlayer.current = "true";
        secondDicePlayer.current = "true";
        thirdDicePlayer.current = "true";  
        doubleNumberOfMoves.current += 3;
        
        console.log("hamle sayısı",doubleNumberOfMoves.current)
        doubleNumberOfMoves.current = 4 && setMoveCount((prevCount) => prevCount + 2);

        console.log("üçüncü 1. oynadı")
      }
      else if( (parseInt(prevParentId, 10) - parseInt(dice1*4, 10) ===
      parseInt(parentId, 10) ) &&  fourthDicePlayer.current  === "false"){
        fourthDicePlayer.current = "true";
        secondDicePlayer.current = "true";
        thirdDicePlayer.current = "true";  
        firstDicePlayer.current = "true";
        doubleNumberOfMoves.current += 4;

        console.log("hamle sayısı",doubleNumberOfMoves.current)
        doubleNumberOfMoves.current = 4 && setMoveCount((prevCount) => prevCount + 2);

        console.log("dördüncü 1. oynadı")
      }
      else {
        setWrongMove(true);
      }
    }
     else if (
      parseInt(prevParentId, 10) - parseInt(dice1, 10) ===
      parseInt(parentId, 10)
    ) {
      console.log("ilk zarı oynadı")
      firstDicePlayer.current = "true";
      setMoveCount((prevCount) => prevCount + 1);
      
    } else if (
      parseInt(prevParentId, 10) - parseInt(dice2, 10) ===
      parseInt(parentId, 10)
      ) {
        console.log("ikinci zarı oynadı")
        secondDicePlayer.current = "true";
        setMoveCount((prevCount) => prevCount + 1);
    } else {
      setWrongMove(true);
    }
  };


  const controlMove = (parentId) => {
    if(parentId <= 0 ){
      return false;
    }
     console.log("🚀 ~ controlMove ~ parentId:", parentId)
     const parentDiv = document.getElementById(`${parentId}`);
     console.log("🚀 ~ controlMove ~ parentDiv:", parentDiv)
     parentDiv.childNodes.forEach(element => {
        if(element.id.charAt(0)=== "w"){
          console.log("false girdi")
          return false;
        }        
     });


     return true;
  }


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
