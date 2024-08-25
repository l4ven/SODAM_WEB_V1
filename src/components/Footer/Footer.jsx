import style from "./style.module.css";
import Logo from "../../assets/logo_footer.png";
const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerWrap}>
        <img src={Logo} alt="푸터 로고" className={style.logo} />
        <p className={style.title}>2024 해커그라운드 해커톤 참가작</p>
        <p>
          Copyrights ⓒ 이번 해커톤 옷 나쁘지 않네 2024 <br />
          All right reversed
        </p>
      </div>
    </footer>
  );
};
export default Footer;
