import React from "react";

function AuthForm() {
  return (
    <form className="auth">
      <div className="auth__login-info">
        <label htmlFor="login" className="auth__login-label">
          Логин
        </label>
        <input type="text" id="login" name="login" className="auth__logi" />
      </div>
      <div className="auth__password-info">
        <label htmlFor="password" className="auth__password-label">
          Пароль
        </label>
        <input type="text" id="password" name="password" />
      </div>
    </form>
  );
}

export default AuthForm;
