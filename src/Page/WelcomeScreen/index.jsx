import QuizIcon from "../../Assets/quiz.png";
import useGameState from "../../Hooks/useGameState";
const WelcomeScreen = () => {
  const { setGameState } = useGameState();
  return (
    <div className="welcomeScreen_Container">
      <img src={QuizIcon} alt="QuizIcon" />
      <h1>Welcome to Quiz App</h1>
      <button
        className="welcomeScreen_Button"
        onClick={() => setGameState("quiz")}
      >
        Get Started
      </button>
    </div>
  );
};
export default WelcomeScreen;
