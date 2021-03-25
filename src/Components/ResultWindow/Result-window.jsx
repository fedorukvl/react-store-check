import React from "react";
import { useSelector } from "react-redux";
import "../../media/css/ResultWindow.css";

function ResultWindow() {
  const { login, password } = useSelector((state) => state);
  return (
    <div className="result">
      <strong className="result__login-title">
        Актуальные данные логина из стора
      </strong>
      <p className="result__login">{login}</p>
      <strong className="result__password-title">
        Актуальные данные пароля из стора
      </strong>
      <p className="result__password">{password}</p>
    </div>
  );
}

export default ResultWindow;
