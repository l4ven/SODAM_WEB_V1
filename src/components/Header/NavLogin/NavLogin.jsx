import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const NavLogin = () => {
  return (
    <Link to="/userLogin" className={style.navLogin}>
      <FaUser className={style.userLogo} />
      로그인
    </Link>
  );
};
export default NavLogin;
