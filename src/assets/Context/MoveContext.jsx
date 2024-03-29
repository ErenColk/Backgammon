import React, { createContext, useState } from "react";

const MoveContext = createContext();

const MoveProvider = ({ children }) => {
  const [moveCount, setMoveCount] = useState(0);
  const [isClickable, setIsClickable] = useState(true);
  const [stop, setStop] = useState(true);
  const [moveMade, setMoveMade] = useState(false);
  const [wrongMove, setWrongMove] = useState(null);
  const [prevParentNode, setPrevParentNode] = useState(null);
  const [firstMove, setFirstMove] = useState(null);
  const [secondMove, setSecondMove] = useState(null);
  const [putSamePlace, setPutSamePlace] = useState(null);
  const [thrownOut, setThrownOut] = useState(null);
  const [playedWrong, setPlayedWrong] = useState(null);

  return (
    <MoveContext.Provider
      value={{
        moveCount,
        setMoveCount,
        isClickable,
        setIsClickable,
        stop,
        setStop,
        moveMade,
        setMoveMade,
        wrongMove,
        setWrongMove,
        prevParentNode,
        setPrevParentNode,
        firstMove,
        setFirstMove,
        secondMove,
        setSecondMove,
        putSamePlace,
        setPutSamePlace,
        thrownOut,
        setThrownOut,
        playedWrong,
        setPlayedWrong,
      }}
    >
      {children}
    </MoveContext.Provider>
  );
};

export { MoveContext, MoveProvider };
