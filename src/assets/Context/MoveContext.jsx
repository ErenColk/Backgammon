import React, { createContext, useState } from "react";

const MoveContext = createContext();

const MoveProvider = ({ children }) => {
  const [moveCount, setMoveCount] = useState(0);
  const [isClickable,setIsClickable] = useState(true);
  const [stop,setStop] = useState(true);
  return (
    <MoveContext.Provider value={{ moveCount, setMoveCount ,isClickable,setIsClickable,stop,setStop }}>
      {children}
    </MoveContext.Provider>
  );
};

export { MoveContext, MoveProvider };
