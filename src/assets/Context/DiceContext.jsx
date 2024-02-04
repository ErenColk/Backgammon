import React, { createContext, useState } from "react";

const DiceContext = createContext();

const DiceProvider = ({ children }) => {
  const [dice1, setDice1] = useState();
  const [dice2, setDice2] = useState();
  const [blackThrew, setBlackThrew] = useState(false);
  const [whiteThrew, setWhiteThrew] = useState(false);
  const [firstGame,setFirstGame] = useState(true);
  return (
    <DiceContext.Provider value={{ dice1, setDice1, dice2, setDice2 ,firstGame,setFirstGame,blackThrew, setBlackThrew,whiteThrew, setWhiteThrew}}>
      {children}
    </DiceContext.Provider>
  );
};

export  {DiceProvider,DiceContext};
