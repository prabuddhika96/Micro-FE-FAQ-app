export default function authPostHeader() {
  const token = localStorage.getItem("logintoken");

  if (token != null) {
    return {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json; charset=utf-8",
    };
  } else {
    return {
      Authorization: "",
      "Content-Type": "application/json; charset=utf-8",
    };
  }
}
