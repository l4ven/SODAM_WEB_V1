import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const NavUser = () => {
  return (
    <Link to="/" className={style.navUser}>
      <div className={style.background}>
        <FaUser className={style.userLogo} />
      </div>
    </Link>
  );
};
export default NavUser;
