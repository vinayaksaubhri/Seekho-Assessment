import TickIcon from "../../Assets/check-mark.png";
import { Questions } from "../../Constant/Question";
import useGameState from "../../Hooks/useGameState";
const ScoreScreen = () => {
  const { setGameState, selectedAnswer, setSelectedAnswer } = useGameState();
  let currentAnswer = 0;
  selectedAnswer.map((item) => {
    if (item.isCorrect) {
      currentAnswer++;
    }
    return null;
  });
  return (
    <div className="scoreScreen_Container">
      <img src={TickIcon} alt="QuizIcon" />
      <h4>You have successfully submitted the Quiz</h4>
      <h1>
        You scored {currentAnswer} out of {Questions.length}
      </h1>
      <button
        onClick={() => {
          setSelectedAnswer(new Array(Questions.length).fill({}));
          setGameState("menu");
        }}
      >
        Take Again
      </button>
    </div>
  );
};
export default ScoreScreen;
