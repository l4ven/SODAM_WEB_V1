import { LuPencilLine } from "react-icons/lu";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const NavWrite = () => {
  return (
    <Link to="/" className={style.navSell}>
      <div className={style.background}>
        <LuPencilLine className={style.sellLogo} />
      </div>
    </Link>
  );
};
export default NavWrite;
