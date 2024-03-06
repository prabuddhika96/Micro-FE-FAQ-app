import axios from "axios";
import authHeader from "../utility/auth-header";
import { BACKEND_SERVER } from "../constants/BackEndServer";
import authPostHeader from "../utility/post-header";

const baseURL = BACKEND_SERVER;

const addAnswer = async (data: any, questionId: any) => {
  const response = await axios({
    method: "post",
    url: `${baseURL}/Faq/questions/${questionId}/answers`,
    data: data,
    headers: authPostHeader(),
  });
  // alert("Favourite created --- "+ response);
  return response;
};

const voteAnswer = async (answerId: any, data: any) => {
  const response = await axios({
    method: "post",
    url: `${baseURL}/Faq/votes/${answerId}`,
    data: data,
    headers: authPostHeader(),
  });
  // alert("Favourite created --- "+ response);
  return response;
};

const AnswerService = {
  addAnswer,
  voteAnswer,
};

export default AnswerService;
