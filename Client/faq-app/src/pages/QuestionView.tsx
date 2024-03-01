import myBackgroundImage from "../Assets/Images/FAQ_background.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/QuestionView.css";

function QuestionView() {
  const [fillActive, setFillActive] = useState("all");
  const Navigate = useNavigate();
  const [allQues, setAllQues] = useState<boolean>(true);
  const [questions, setQuestions] = useState<any>([]);

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };

  const answerViewHandle = () => {
    Navigate("/answer-view");
  };

  useEffect(() => {
    if (allQues) {
      setQuestions(questionData);
    } else {
      setQuestions(myQuestionData);
    }
  }, [allQues]);

  return (
    <div
      className={`mx-auto content-center flex justify-center bg-cover bg-center bg-no-repeat h-screen`}
      style={{
        backgroundImage: `url(${myBackgroundImage})`,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <div className="w-full backdrop-grayscale-0 bg-white/40">
        <div className="w-2/3 mx-auto">
          {/* tabs */}
          <div className="w-full flex justify-evenly items-center p-3">
            <div
              className={`tabTitle ${allQues && `selected-tab`}`}
              onClick={() => {
                setAllQues(true);
              }}
            >
              All Question
            </div>
            <div
              className={`tabTitle ${!allQues && `selected-tab`}`}
              onClick={() => {
                setAllQues(false);
              }}
            >
              My Question
            </div>
          </div>

          {/* content */}
          <div>
            {questions?.map((question: any) => (
              <div className="content-container" key={question.id}>
                <div className="question-card">
                  <p className="">{question.question}</p>

                  <button className="q-card-btn" onClick={answerViewHandle}>
                    View Answer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionView;

const questionData = [
  {
    id: 1,
    question: "Where are Eyepax’s offices located?",
    answer:
      "Eyepax has offices in Colombo, Stockholm, Las Vegas, Paris, and Ho Chi Minh. Our development centers are in Colombo, Sri Lanka, and Ho Chi Minh, Vietnam. Additionally, we have business centers in Stockholm (Sweden), Las Vegas (USA), and Paris (France)",
    description: "This is the description of the question.",
  },
  {
    id: 3,
    question: "Who are Eyepax’s clients?",
    answer:
      "Our clients include startups, multinational enterprises, SMEs, government administrations, public service companies, and leading educational institutions. Notable clients in our portfolio include Expedia, Sinorbis, WesFarmers, New Zealand Safety, Mabi Sweden, Stockholm Public Transport, and many more",
    description: "This is another question description.",
  },
];

const myQuestionData = [
  {
    id: 1,
    question: "Where are Eyepax’s offices located?",
    answer:
      "Eyepax has offices in Colombo, Stockholm, Las Vegas, Paris, and Ho Chi Minh. Our development centers are in Colombo, Sri Lanka, and Ho Chi Minh, Vietnam. Additionally, we have business centers in Stockholm (Sweden), Las Vegas (USA), and Paris (France)",
    description: "This is the description of the question.",
  },
];
