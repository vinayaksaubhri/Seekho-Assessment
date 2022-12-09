import { createContext, useContext, useState } from "react";

const GameStateContext = createContext({});

export const GameStateProvider = ({ children }) => {
  const [gameState, setGameState] = useState("menu"); //possible value menu,quiz,endScreen

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameStateContext.Provider>
  );
};
export default function useGameState() {
  return useContext(GameStateContext);
}
