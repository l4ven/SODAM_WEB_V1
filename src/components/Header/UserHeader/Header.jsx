import style from "./style.module.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import NavShopping from "./NavShopping/NavShopping";
import NavUser from "./NavUser/NavUser";
import Logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <Link to="/userHome" className={style.logo}>
          <img src={Logo} alt="소담 로고" className={style.logoPng} />
        </Link>
      </nav>
      <div className={style.searchContainer}>
        <form className={style.searchForm}>
          <input
            type="text"
            placeholder="원하시는 상품을 검색해보세요."
            className={style.searchInput}
          />
          <button type="submit" className={style.searchButton}>
            <CiSearch className={style.searchLogo} />
          </button>
        </form>
        <NavShopping />
        <NavUser />
      </div>
    </header>
  );
};

export default Header;
