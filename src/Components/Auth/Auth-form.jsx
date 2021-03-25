import React from "react";
import { useDispatch } from "react-redux";
import { setLogin, setPassword } from "../../store/auth/authAction.js";
import "../../media/css/Auth-form.css";

function AuthForm() {
  const dispatch = useDispatch();

  const setAuthData = (e) => {
    switch (e.target.name) {
      case "login":
        dispatch(setLogin(e.target.value));
        break;
      case "password":
        dispatch(setPassword(e.target.value));
        break;
      default:
        return false;
    }
  };

  return (
    <form className="auth">
      <div className="auth__login-info">
        <label htmlFor="login" className="auth__login-label">
          Логин
        </label>
        <input
          type="text"
          id="login"
          name="login"
          className="auth__login"
          onChange={setAuthData}
        />
      </div>
      <div className="auth__password-info">
        <label htmlFor="password" className="auth__password-label">
          Пароль
        </label>
        <input
          type="text"
          id="password"
          name="password"
          className="auth__password"
          onChange={setAuthData}
        />
      </div>
    </form>
  );
}

export default AuthForm;
