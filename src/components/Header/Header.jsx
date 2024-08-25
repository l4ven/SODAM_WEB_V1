import style from "./style.module.css";
import { Link } from "react-router-dom";
import NavLogin from "./NavLogin/NavLogin";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <Link to="/" className={style.logo}>
          <img src={Logo} alt="소담 로고" className={style.logoPng} />
        </Link>
      </nav>
      <div className={style.searchContainer}>
        <NavLogin />
      </div>
    </header>
  );
};

export default Header;
