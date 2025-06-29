import React, { createContext, useEffect, useState } from "react";
import { deckDataInstance } from "./DeckData";

const MELContext = createContext();

const MELContextProvider = ({ children }) => {
  const [dd] = useState(deckDataInstance);
  const [favouriteState, setFavouriteState] = useState(0);


  return (
    <MELContext.Provider value={{dd, favouriteState, setFavouriteState}}>
      {children}
    </MELContext.Provider>
  );
};

  export { MELContext, MELContextProvider };