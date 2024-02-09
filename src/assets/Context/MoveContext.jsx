import React, { createContext, useState } from "react";

const MoveContext = createContext();

const MoveProvider = ({ children }) => {
  const [moveCount, setMoveCount] = useState(0);
  const [isClickable, setIsClickable] = useState(true);
  const [stop, setStop] = useState(true);
  const [moveMade, setMoveMade] = useState(false);
  const [wrongMove, setWrongMove] = useState(false);
  const [prevParentNode, setPrevParentNode] = useState(null);
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
      }}
    >
      {children}
    </MoveContext.Provider>
  );
};

export { MoveContext, MoveProvider };
