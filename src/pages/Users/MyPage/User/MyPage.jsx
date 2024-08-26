import React from "react";
import style from "./style.module.css";
import Header from "../../../../components/Header/UserHeader/Header";
import Footer from "../../../../components/Footer/Footer";
import Aside from "../User/Aside/Aside";

const MyPage = () => {
  return (
    <>
      <Header />
      <main className={style.myPageContainer}>
        <Aside />
        <div className={style.mainContent}>
          {/* 메인 콘텐츠가 이곳에 들어갑니다 */}
          <h2>My Page Content</h2>
          <p>여기에 마이페이지 내용을 추가하세요.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MyPage;
