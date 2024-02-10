import React, { useContext, useRef, useState } from "react";

import { PiecesContext } from "../../Context/PiecesContext";
import { DiceContext } from "../../../Context/DiceContext";
import { MoveContext } from "../../../Context/MoveContext";

const WhitePiece13 = () => {
  const { setPiece } = useContext(PiecesContext);
  const { whiteThrew, dice1, dice2 } = useContext(DiceContext);
  const { stop, moveMade, setMoveMade, setPrevParentNode, setWrongMove,
    setMoveCount } =
    useContext(MoveContext);
  const [prevParentId, setPrevParentId] = useState();

  const firstDicePlayer = useRef("false");
  const secondDicePlayer = useRef("false");

 
  const dragStart = (e) => {
    const target = e.target;
    setPiece(target);
    setPrevParentNode(e.target.parentNode);
    changeTriangleColor(e, true);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const changeTriangleColor = (e, startOrFinished) => {
    const parentDiv = e.target.parentNode;
    const parentId = parentDiv.id;
    setPrevParentId(parentId);
    //Var olan div
    let firstSelectedTriangle = document.getElementById(`${parentId}`);
    let secondSelectedTriangle = document.getElementById(`${parentId}`);


    if (!moveMade) {
      //Gelen zarla birlikte divi alıyorum. hamle yapıldıysa buraya girmez.
      console.log("hamle yapılan yere girdi");
      firstSelectedTriangle = document.getElementById(
        `${parseInt(dice1, 10) + parseInt(parentId, 10)}`
      );
      secondSelectedTriangle = document.getElementById(
        `${parseInt(dice2, 10) + parseInt(parentId, 10)}`
      );
    }


    if (firstDicePlayer.current == "true") {
      firstSelectedTriangle = document.getElementById(
        `${parseInt(dice1, 10) + parseInt(prevParentId, 10)}`
      );
      console.log("firste girdi");
    } else if (secondDicePlayer.current == "true") {
      secondSelectedTriangle = document.getElementById(
        `${parseInt(dice2, 10) + parseInt(prevParentId, 10)}`
      );
      console.log("seconda girdi");
    }

    if (startOrFinished) {
      firstSelectedTriangle &&
      (firstSelectedTriangle.style.backgroundColor =
        "rgba(247, 173, 62, 0.5)");

    secondSelectedTriangle &&
      (secondSelectedTriangle.style.backgroundColor =
        "rgba(247, 173, 62, 0.5)");
    } else {     
      clearTriangle();
      setMoveMade(false);
    }
  };


  const clearTriangle = () =>{
    for (let index = 1; index <= 24; index++) {
      document.getElementById(`${parseInt(index)}`).style.backgroundColor = "";      
     }
  }


  const dragEnd = (e) => {
    const parentDiv = e.target.parentNode;
    const parentId = parentDiv.id;
    
    if (e.target.parentNode.classList.contains("out-circle")) {
      setMoveCount((prevCount) => prevCount - 1);
      setWrongMove(true);
    }

    if (
      parseInt(dice1, 10) + parseInt(prevParentId, 10) ===
      parseInt(parentId, 10)
    ) {
      console.log("ilk zarı oynadı");
      secondDicePlayer.current = "true";
    } else if (
      parseInt(dice2, 10) + parseInt(prevParentId, 10) ===
      parseInt(parentId, 10)
    ) {
      console.log("ikinci zarı oynadı");
      firstDicePlayer.current = "true";
    }

    console.log("dragend ");
    changeTriangleColor(e, false);
    e.stopPropagation();
  };
  const dragEvents = stop
    ? {}
    : !whiteThrew
    ? {
        onDragStart: dragStart,
        onDragEnd: dragEnd,
      }
    : {};

  return (
    <div
      id="w-13"
      className="out-circle"
      draggable={stop ? "false" : whiteThrew ? "false" : "true"}
      {...dragEvents}
    ></div>
  );

};

export default WhitePiece13;
