import axios from "axios";
import authHeader from "../utility/auth-header";
import { BACKEND_SERVER } from "../constants/BackEndServer";

const baseURL = BACKEND_SERVER;

const getAllQuestions = async () => {
  const response = await axios({
    method: "get",
    url: `${baseURL}/Faq/questions`,
    headers: authHeader(),
  });
  // alert("Favourite created --- "+ response);
  return response;
};

const getQuestionById = async (questionId: any) => {
  const response = await axios({
    method: "get",
    url: `${baseURL}/Faq/questions/${questionId}`,
    headers: authHeader(),
  });
  // alert("Favourite created --- "+ response);
  return response;
};

const getQuestionsByUserId = async (userId: any) => {
  const response = await axios({
    method: "get",
    url: `${baseURL}/Faq/questions/${userId}`,
    headers: authHeader(),
  });
  // alert("Favourite created --- "+ response);
  return response;
};

const getAnswersByQuestionId = async (questionId: any) => {
  const response = await axios({
    method: "get",
    url: `${baseURL}/Faq/questions/${questionId}/answers`,
    headers: authHeader(),
  });
  // alert("Favourite created --- "+ response);
  return response;
};

const addQuestion = async (data: any) => {
  const response = await axios({
    method: "post",
    url: `${baseURL}/Faq/questions`,
    data: data,
    headers: authHeader(),
  });
  // alert("Favourite created --- "+ response);
  return response;
};

const QuesionService = {
  getAllQuestions,
  getQuestionById,
  getQuestionsByUserId,
  getAnswersByQuestionId,
  addQuestion,
};

export default QuesionService;
