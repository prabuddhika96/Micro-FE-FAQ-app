import myBackgroundImage from "../Assets/Images/FAQ_background.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/QuestionView.css";
import { RouteNames } from "../constants/RouteNames";
import { getRoute } from "../utility/function";
import QuesionService from "../services/QuesionService";
import jwtDecode from "jwt-decode";

function QuestionView() {
  const navigate = useNavigate();
  const [allQues, setAllQues] = useState<boolean>(true);
  const [questions, setQuestions] = useState<any>([]);
  const [allQuestions, setAllQuestions] = useState<any>([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the JWT token from wherever you store it (e.g., localStorage)
    const token = localStorage.getItem("logintoken");

    if (token) {
      // Decode the JWT token to extract user details
      var decoded = jwtDecode(token);
      console.log(decoded);
      setUser(decoded);
    }
  }, []);

  useEffect(() => {
    if (allQues) {
      setQuestions(allQuestions);
    } else {
      if (user) {
        const myQuestions = allQuestions.filter(
          (q: any) => q?.userId === user?.UserId
        );
        setQuestions(myQuestions);
      }
    }
  }, [allQues]);

  useEffect(() => {
    QuesionService.getAllQuestions().then((res: any) => {
      if (res) {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          setAllQuestions(res?.data);
          setQuestions(res?.data);
        }
      }
    });
  }, []);

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
                  <p className="">{question?.title}</p>

                  <button
                    className="q-card-btn"
                    onClick={() => {
                      navigate(
                        getRoute(
                          RouteNames.ViewAnswer.replace(":id", question?.id)
                        )
                      );
                    }}
                  >
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
