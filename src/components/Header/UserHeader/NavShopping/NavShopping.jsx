import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const NavShopping = () => {
  return (
    <Link to="/" className={style.NavShopping}>
      <div className={style.background}>
        <IoCartSharp className={style.shoppingLogo} />
      </div>
    </Link>
  );
};
export default NavShopping;
