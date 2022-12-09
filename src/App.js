import useGameState from "./Hooks/useGameState";
import QuizScreen from "./Page/QuizScreen";
import ScoreScreen from "./Page/ScoreScreen";
import WelcomeScreen from "./Page/WelcomeScreen";

function App() {
  const { gameState } = useGameState();
  return (
    <div>
      {gameState === "menu" && <WelcomeScreen />}
      {gameState === "quiz" && <QuizScreen />}
      {gameState === "end" && <ScoreScreen />}
    </div>
  );
}

export default App;
