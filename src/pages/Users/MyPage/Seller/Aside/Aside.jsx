import style from "./style.module.css";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className={style.asideContainer}>
      <div>
        <h1>마이페이지</h1>
        <div className={style.menuContainer}>
          <Link to="" className={style.menu}>
            주문내역
          </Link>
          <Link to="" className={style.menu}>
            반품/교환 신청
          </Link>
          <Link to="" className={style.menu}>
            찜 리스트
          </Link>
          <Link to="" className={style.menu}>
            개인정보확인/수정
          </Link>
        </div>
      </div>
    </aside>
  );
};
export default Aside;
