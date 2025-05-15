import React, { createContext, useEffect, useState } from "react";
import { deckDataInstance } from "./DeckData";
import { qodD } from "./QuestionOfTheDayData";

const MELContext = createContext();

const MELContextProvider = ({ children }) => {
  const [dd] = useState(deckDataInstance);
  const [favouriteState, setFavouriteState] = useState(0);
  const [questionOfTheDayState, setQuestionOfTheDayState] = useState(0);

  useEffect(() => {
    qodD.loadQoD(setQuestionOfTheDayState);
  }, []);

  return (
    <MELContext.Provider value={{dd, favouriteState, setFavouriteState, questionOfTheDayState, setQuestionOfTheDayState}}>
      {children}
    </MELContext.Provider>
  );
};

  export { MELContext, MELContextProvider };