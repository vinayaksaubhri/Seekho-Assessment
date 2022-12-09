import { createContext, useContext, useState } from "react";
import { Questions } from "../Constant/Question";

const GameStateContext = createContext({});

export const GameStateProvider = ({ children }) => {
  const [gameState, setGameState] = useState("menu"); //possible value menu,quiz,end
  const [selectedAnswer, setSelectedAnswer] = useState(
    new Array(Questions.length).fill({})
  );

  return (
    <GameStateContext.Provider
      value={{ gameState, setGameState, selectedAnswer, setSelectedAnswer }}
    >
      {children}
    </GameStateContext.Provider>
  );
};
export default function useGameState() {
  return useContext(GameStateContext);
}
