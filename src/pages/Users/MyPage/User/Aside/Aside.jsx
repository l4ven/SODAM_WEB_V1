import style from "./style.module.css";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className={style.asideContainer}>
      <div>
        <h1>마이페이지</h1>
        <div className={style.menuContainer}>
          <div className={style.menuBox}>
            <Link to="" className={style.menu}>
              주문내역
            </Link>{" "}
          </div>
          <br />
          <div className={style.menuBox}>
            <Link to="" className={style.menu}>
              반품/교환 신청
            </Link>{" "}
          </div>
          <br />
          <div className={style.menuBox}>
            <Link to="" className={style.menu}>
              찜 리스트
            </Link>
          </div>
          <br />
          <div className={style.menuBox}>
            <Link to="" className={style.menu}>
              개인정보확인/수정
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Aside;
