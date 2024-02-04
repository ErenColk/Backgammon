import React, { createContext, useState } from "react";

const PiecesContext = createContext();

const PiecesProvider = ({ children }) => {
    const [piece,setPiece] = useState(null);


  return <>
    <PiecesContext.Provider value ={{piece,setPiece}}>
        {children}
    </PiecesContext.Provider>
  </>;
};


export {PiecesContext,PiecesProvider};