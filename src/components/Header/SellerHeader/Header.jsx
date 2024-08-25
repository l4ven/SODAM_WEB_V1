import style from "./style.module.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import NavLogin from "./NavLogin/NavLogin";
import NavShopping from "./UserHeader/NavShopping/NavShopping";
import NavUser from "./UserHeader/NavUser/NavUser";
import NavWrite from "./SellerHeader/NavWrite/NavWrite";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <Link to="/" className={style.logo}>
          <img src={Logo} alt="소담 로고" />
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
        <NavWrite />
        <NavUser />
      </div>
    </header>
  );
};
export default Header;
