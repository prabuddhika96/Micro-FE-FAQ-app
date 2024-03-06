import React, { useEffect, useState } from "react";
import "../styles/AnswerView.css";
import { answers } from "../constants/QuestionAnswers";
import AnswerCard from "../components/AnswerCard";
import QuesionService from "../services/QuesionService";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import AnswerService from "../services/AnswerService";

function AnswerView() {
  const { id } = useParams();
  const [question, setQuestion] = useState<any>();
  const [answers, setAnswers] = useState<any>();
  const [myAnswer, setMyAnswer] = useState<any>();

  const handleAnswer = () => {
    console.log(myAnswer);
    const answer = {
      description: myAnswer,
    };

    AnswerService.addAnswer(answer, id).then((res: any) => {
      if (res.status === 200 || res.status === 201) {
        // console.log(res);
        setAnswers([...answers, res?.data]);
      }
    });
  };

  useEffect(() => {
    QuesionService.getQuestionById(id).then((res: any) => {
      if (res) {
        // console.log(res);
        if (res.status === 200 || res.status === 201) {
          setQuestion(res?.data);
          QuesionService.getAnswersByQuestionId(res?.data?.id).then(
            (response: any) => {
              // console.log(response);
              if (res.status === 200 || res.status === 201) {
                setAnswers(response?.data);
              }
            }
          );
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

      {/* post Answer */}
      <div className="text-right">
        <TextField
          id="outlined-multiline-flexible"
          label="Answer"
          multiline
          maxRows={4}
          rows={5}
          fullWidth
          onChange={(e: any) => {
            setMyAnswer(e.target.value);
          }}
        />
        <div className="mt-2">
          <Button variant="contained" onClick={handleAnswer}>
            Submit Answer
          </Button>
        </div>
      </div>

      {/* answers */}
      <div>
        {answers?.length > 0 &&
          answers?.map((answer: any) => (
            // <></>
            <AnswerCard answer={answer} key={answer?.id} />
          ))}
      </div>
    </div>
  );
}

export default AnswerView;
