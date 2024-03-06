export default function authHeader() {
  const token = localStorage.getItem("logintoken");

  if (token != null) {
    return { Authorization: "Bearer " + token };
  } else {
    return { Authorization: "" };
  }
}
