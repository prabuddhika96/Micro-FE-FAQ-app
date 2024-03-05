import React, { useEffect, useState } from "react";
import "../styles/AnswerView.css";
import { answers } from "../constants/QuestionAnswers";
import AnswerCard from "../components/AnswerCard";
import QuesionService from "../services/QuesionService";
import { useParams } from "react-router-dom";

function AnswerView() {
  const { id } = useParams();
  const [question, setQuestion] = useState<any>();

  useEffect(() => {
    QuesionService.getQuestionById(id).then((res: any) => {
      if (res) {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          setQuestion(res?.data);
        }
      }
    });
  }, []);
  return (
    <div className="container">
      {/* question */}
      <div className="question-details">
        <h2>{question?.title}</h2>
        <p>{question?.description}</p>
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
