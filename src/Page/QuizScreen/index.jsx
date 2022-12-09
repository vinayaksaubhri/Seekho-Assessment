import { useState } from "react";
import { Questions } from "../../Constant/Question";
import useGameState from "../../Hooks/useGameState";
const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const { setGameState, setSelectedAnswer, selectedAnswer } = useGameState();

  const handleClick = (item) => {
    selectedAnswer[currentQuestionIndex] = item;
    setSelectedAnswer([...selectedAnswer]);
  };
  return (
    <div className="quizScreen_Container">
      <div className="quizScreen_AnswerContainer">
        <h1>Answer Selected:</h1>
        {selectedAnswer.map((item, index) => {
          return <h1 key={index}>{item?.answerText}</h1>;
        })}
      </div>
      <div className="quizScreen_QuestionContainer">
        <div>
          <h1 className="QuestionContainer_QuestionNumber">
            Question {currentQuestionIndex + 1}
            <span>/{Questions.length}</span>
          </h1>
          <h3 className="QuestionContainer_QuestionText">
            {Questions[currentQuestionIndex].questionText}
          </h3>
        </div>
        <div className="QuestionContainer_OptionSection">
          {Questions[currentQuestionIndex].answerOptions.map((item, index) => {
            let active = selectedAnswer.includes(item);
            return (
              <div
                className={active ? "option active" : "option"}
                key={index}
                onClick={() => handleClick(item)}
              >
                {item.answerText}
              </div>
            );
          })}
        </div>
      </div>
      <div className="quiz-Section_ButtonContainer">
        <button
          onClick={() => {
            setCurrentQuestionIndex((prev) => prev - 1);
          }}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          className={
            currentQuestionIndex + 1 === Questions.length ? "buttonHide" : ""
          }
          onClick={() => {
            setCurrentQuestionIndex((prev) => prev + 1);
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            setGameState("end");
          }}
          className={
            currentQuestionIndex + 1 === Questions.length ? "" : "buttonHide"
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default QuizScreen;
