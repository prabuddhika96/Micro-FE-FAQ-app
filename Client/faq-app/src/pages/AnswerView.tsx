import React from "react";
import "../styles/AnswerView.css";
import { answers } from "../constants/QuestionAnswers";
import AnswerCard from "../components/AnswerCard";

function AnswerView() {
  return (
    <div className="container">
      {/* question */}
      <div className="question-details">
        <h2>Quesion</h2>
        <p>description</p>
      </div>

      {/* answers */}
      <div>
        {answers?.map((answer: any) => (
          <AnswerCard answer={answer} key={answer?.id} />
        ))}
      </div>
    </div>
  );
}

export default AnswerView;
