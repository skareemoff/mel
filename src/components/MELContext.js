import React, { createContext, useState, useEffect } from "react";
import { DeckData } from "./DeckData";

const MELContext = createContext();

const MELContextProvider = ({ children }) => {
    const [dd, setDD] = useState(null);
    const [favouriteState, setFavouriteState] = useState(0);

    // fetch a user from a fake backend API
    useEffect(() => {
        setDD(new DeckData());
    }, []);

    return (
      <MELContext.Provider value={{dd, favouriteState, setFavouriteState}}>
        {children}
      </MELContext.Provider>
    );
  };

  export { MELContext, MELContextProvider };