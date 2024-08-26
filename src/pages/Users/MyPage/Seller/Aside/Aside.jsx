import style from "./style.module.css";

const Aside = ({ setActiveSection }) => {
  return (
    <aside className={style.asideContainer}>
      <div className={style.asideInner}>
        <h1>마이샵</h1>
        <div className={style.menuContainer}>
          <div className={style.menuBox}>
            <a href="#home" onClick={() => setActiveSection("home")}>
              <div className={style.menu}>마이샵 홈</div>
            </a>
          </div>
          <div className={style.menuBox}>
            <a
              href="#product-registration"
              onClick={() => setActiveSection("product-registration")}
            >
              <div className={style.menu}>상품등록</div>
            </a>
          </div>
          <div className={style.menuBox}>
            <a
              href="#inventory-management"
              onClick={() => setActiveSection("inventory-management")}
            >
              <div className={style.menu}>재고관리</div>
            </a>
          </div>
          <div className={style.menuBox}>
            <a
              href="#returns-exchange"
              onClick={() => setActiveSection("returns-exchange")}
            >
              <div className={style.menu}>반품/교환 내역</div>
            </a>
          </div>
          <div className={style.menuBox}>
            <a
              href="#settlement"
              onClick={() => setActiveSection("settlement")}
            >
              <div className={style.menu}>정산관리</div>
            </a>
          </div>
          <div className={style.menuBox}>
            <a href="#profile" onClick={() => setActiveSection("profile")}>
              <div className={style.menu}>로그아웃</div>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
