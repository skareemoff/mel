import React, { createContext, useState, useEffect } from "react";
import { DeckData } from "./DeckData";

const MELContext = createContext();

const MELContextProvider = ({ children }) => {
    const [dd, setDD] = useState(null);
    const [favouriteState, setFavouriteState] = useState(0);
    const [purchaseState, setPurchaseState] = useState(false);

    useEffect(() => {
        setDD(new DeckData());
    }, []);

    return (
      <MELContext.Provider value={{dd, favouriteState, setFavouriteState, purchaseState, setPurchaseState}}>
        {children}
      </MELContext.Provider>
    );
  };

  export { MELContext, MELContextProvider };