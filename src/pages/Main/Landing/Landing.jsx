import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import style from "./style.module.css";
import Veg from "../../../assets/veg.png";
import Logo from "../../../assets/logo.png";

const Landing = () => {
  return (
    <>
      <Header />
      <main className={style.mainContainer}>
        <main className={style.mainContent}>
          <div>
            <h1>소담한 농산물을 편리하게</h1>
            <img src={Logo} alt="소담 로고" className={style.logo} />
            <div className={style.signUpContainer}>
              <Link to="/userSignUp" className={style.userSingup}>
                <button className={style.userBtn}>구매자 시작하기</button>
              </Link>
              <Link to="/sellerSignUp" className={style.sellerSignUp}>
                <button className={style.sellerBtn}>판매자 시작하기</button>
              </Link>
            </div>
          </div>
          <img src={Veg} alt="채소들" className={style.veg} />
        </main>
      </main>
    </>
  );
};
export default Landing;
