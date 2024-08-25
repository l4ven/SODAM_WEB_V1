import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const Login = () => {
  return (
    <div className={style.background}>
      <div className={style.loginContainer}>
        <h1>로그인</h1> <br /> <br /> <br />
        <form className={style.loginForm}>
          <div>
            <p>아이디</p> <br />
            <input type="text" placeholder="아이디" className={style.idInput} />
            <br /> <br />
          </div>
          <div>
            <p>비밀번호</p> <br />
            <input
              type="password"
              placeholder="비밀번호"
              className={style.passwordInput}
            />
            <br /> <br />
            <Link to="" className={style.linkSignUp}>
              회원가입하러가기
            </Link>
          </div>
          <button type="submit" className={style.loginBtn}>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
