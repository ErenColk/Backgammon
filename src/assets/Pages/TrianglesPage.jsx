import React, { useContext, useEffect } from "react";
import { PiecesContext } from "../Components/Context/PiecesContext";
import { MoveContext } from "../Context/MoveContext";
import Dice from "../Components/Dices/Dice";
import TriangleLeftBot1 from "../Components/Triangles/TriangleLeftBot/TriangleLeftBot1";
import TriangleLeftBot2 from "../Components/Triangles/TriangleLeftBot/TriangleLeftBot2";
import TriangleLeftBot3 from "../Components/Triangles/TriangleLeftBot/TriangleLeftBot3";
import TriangleLeftBot4 from "../Components/Triangles/TriangleLeftBot/TriangleLeftBot4";
import TriangleLeftBot5 from "../Components/Triangles/TriangleLeftBot/TriangleLeftBot5";
import TriangleLeftBot6 from "../Components/Triangles/TriangleLeftBot/TriangleLeftBot6";

import TraingleLeftTop1 from "../Components/Triangles/TriangleLeftTop/TraingleLeftTop1";
import TraingleLeftTop2 from "../Components/Triangles/TriangleLeftTop/TraingleLeftTop2";
import TraingleLeftTop3 from "../Components/Triangles/TriangleLeftTop/TraingleLeftTop3";
import TraingleLeftTop4 from "../Components/Triangles/TriangleLeftTop/TraingleLeftTop4";
import TraingleLeftTop5 from "../Components/Triangles/TriangleLeftTop/TraingleLeftTop5";
import TraingleLeftTop6 from "../Components/Triangles/TriangleLeftTop/TraingleLeftTop6";

import TriangleRightBot1 from "../Components/Triangles/TriangleRightBot/TriangleRightBot1";
import TriangleRightBot2 from "../Components/Triangles/TriangleRightBot/TriangleRightBot2";
import TriangleRightBot3 from "../Components/Triangles/TriangleRightBot/TriangleRightBot3";
import TriangleRightBot4 from "../Components/Triangles/TriangleRightBot/TriangleRightBot4";
import TriangleRightBot5 from "../Components/Triangles/TriangleRightBot/TriangleRightBot5";
import TriangleRightBot6 from "../Components/Triangles/TriangleRightBot/TriangleRightBot6";

import TriangleRightTop1 from "../Components/Triangles/TriangleRightTop/TriangleRightTop1";
import TriangleRightTop2 from "../Components/Triangles/TriangleRightTop/TriangleRightTop2";
import TriangleRightTop3 from "../Components/Triangles/TriangleRightTop/TriangleRightTop3";
import TriangleRightTop4 from "../Components/Triangles/TriangleRightTop/TriangleRightTop4";
import TriangleRightTop5 from "../Components/Triangles/TriangleRightTop/TriangleRightTop5";
import TriangleRightTop6 from "../Components/Triangles/TriangleRightTop/TriangleRightTop6";
import { DiceContext } from "../Context/DiceContext";

const TrianglesPage = () => {
  const { piece, setPiece } = useContext(PiecesContext);
  const {
    moveCount,
    setMoveCount,
    setIsClickable,
    setStop,
    setMoveMade,
    prevParentNode,
    wrongMove,
    setWrongMove,
  } = useContext(MoveContext);
  const { blackThrew, setBlackThrew, setWhiteThrew } = useContext(DiceContext);

  const drop = async (e) => {
    e.preventDefault(); //eklendi
    e.stopPropagation(); //eklendi

    const target = piece;
    if (target !== null) {
      setMoveMade(true);
      const droppedArea = e.target;
      const childNodes = droppedArea.childNodes;

      await childNodes.forEach((childNode) => {
        if (childNode.id === target.id) {
          setMoveMade(false);
          setWrongMove(true);
        }
      });
      target.style.display = "block";
      e.target.appendChild(target);
    }
  };

  useEffect(() => {

    if (prevParentNode !== null && wrongMove && piece !== null) {
      const target = piece;
      target.style.display = "block";
      prevParentNode.appendChild(target);
      setMoveMade(false);
      setPiece(null);
      setWrongMove(null);
    }
  }, [wrongMove]);

  useEffect(() => {
    if (moveCount === 2) {
      if (!blackThrew) {
        setBlackThrew(true);
        setWhiteThrew(false);
      } else {
        setWhiteThrew(true);
        setBlackThrew(false);
      }
      setIsClickable(true);
      setMoveCount(0);
      setPiece(null);
      setStop(true);
      setMoveMade(false);
    }
  }, [moveCount]);

  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <div className="area-left">
        <div className="area-left-top">
          <div className="triangle-top-white">
            <TraingleLeftTop1
              drop={drop}
              dragOver={dragOver}
            ></TraingleLeftTop1>
          </div>
          <div className="triangle-top-dark">
            <TraingleLeftTop2
              drop={drop}
              dragOver={dragOver}
            ></TraingleLeftTop2>
          </div>
          <div className="triangle-top-white">
            <TraingleLeftTop3
              drop={drop}
              dragOver={dragOver}
            ></TraingleLeftTop3>
          </div>
          <div className="triangle-top-dark">
            <TraingleLeftTop4
              drop={drop}
              dragOver={dragOver}
            ></TraingleLeftTop4>
          </div>
          <div className="triangle-top-white">
            <TraingleLeftTop5
              drop={drop}
              dragOver={dragOver}
            ></TraingleLeftTop5>
          </div>
          <div className="triangle-top-dark">
            <TraingleLeftTop6
              drop={drop}
              dragOver={dragOver}
            ></TraingleLeftTop6>
          </div>
        </div>
        <div className="area-left-bottom">
          <div className="triangle-bottom-white">
            <TriangleLeftBot1
              drop={(e) => drop(e)}
              dragOver={(e) => dragOver(e)}
            ></TriangleLeftBot1>
          </div>
          <div className="triangle-bottom-dark">
            <TriangleLeftBot2
              drop={(e) => drop(e)}
              dragOver={(e) => dragOver(e)}
            ></TriangleLeftBot2>
          </div>
          <div className="triangle-bottom-white">
            <TriangleLeftBot3
              drop={(e) => drop(e)}
              dragOver={(e) => dragOver(e)}
            ></TriangleLeftBot3>
          </div>
          <div className="triangle-bottom-dark">
            <TriangleLeftBot4
              drop={(e) => drop(e)}
              dragOver={(e) => dragOver(e)}
            ></TriangleLeftBot4>
          </div>
          <div className="triangle-bottom-white">
            <TriangleLeftBot5
              drop={(e) => drop(e)}
              dragOver={(e) => dragOver(e)}
            ></TriangleLeftBot5>
          </div>
          <div className="triangle-bottom-dark">
            <TriangleLeftBot6
              drop={drop}
              dragOver={dragOver}
            ></TriangleLeftBot6>
          </div>
        </div>
      </div>
      <div className="area-mid">
        <Dice></Dice>
      </div>

      <div className="area-right">
        <div className="area-right-top">
          <div className="triangle-top-dark">
            <TriangleRightTop1
              drop={drop}
              dragOver={dragOver}
            ></TriangleRightTop1>
          </div>
          <div className="triangle-top-white">
            <TriangleRightTop2
              drop={drop}
              dragOver={dragOver}
            ></TriangleRightTop2>
          </div>
          <div className="triangle-top-dark">
            <TriangleRightTop3
              drop={drop}
              dragOver={dragOver}
            ></TriangleRightTop3>
          </div>
          <div className="triangle-top-white">
            <TriangleRightTop4
              drop={drop}
              dragOver={dragOver}
            ></TriangleRightTop4>
          </div>
          <div className="triangle-top-dark">
            <TriangleRightTop5
              drop={drop}
              dragOver={dragOver}
            ></TriangleRightTop5>
          </div>
          <div className="triangle-top-white">
            <TriangleRightTop6
              drop={drop}
              dragOver={dragOver}
            ></TriangleRightTop6>
          </div>
        </div>

        <div className="area-right-bottom">
          <div className="triangle-bottom-white">
            <TriangleRightBot6
              drop={drop}
              dragOver={dragOver}
            ></TriangleRightBot6>
          </div>
          <div className="triangle-bottom-dark">
            <TriangleRightBot5
              drop={drop}
              dragOver={dragOver}
            ></TriangleRightBot5>
          </div>
          <div className="triangle-bottom-white">
            <TriangleRightBot4
              drop={drop}
              dragOver={dragOver}
            ></TriangleRightBot4>
          </div>
          <div className="triangle-bottom-dark">
            <TriangleRightBot3
              drop={drop}
              dragOver={dragOver}
            ></TriangleRightBot3>
          </div>
          <div className="triangle-bottom-white">
            <TriangleRightBot2
              drop={drop}
              dragOver={dragOver}
            ></TriangleRightBot2>
          </div>
          <div className="triangle-bottom-dark">
            <TriangleRightBot1
              drop={drop}
              dragOver={dragOver}
            ></TriangleRightBot1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrianglesPage;
