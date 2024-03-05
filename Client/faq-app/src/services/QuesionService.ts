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

const QuesionService = {
  getAllQuestions,
};

export default QuesionService;
