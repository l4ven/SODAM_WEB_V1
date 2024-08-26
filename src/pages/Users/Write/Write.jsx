import Header from "../../../components/Header/SellerHeader/Header";
import Footer from "../../../components/Footer/Footer";
import style from "./style.module.css";

const Write = () => {
  return (
    <>
      <Header />
      <div className={style.writeContainer}>
        <div>
          <form action="">
            <h2 className={style.title}>농가 일지 작성하기</h2> <br />
            <div className={style.dateContainer}>
              <div className={style.dateTitle}>날짜</div>
              <div className={style.inputContainer}>
                <input type="date" />
              </div>
            </div>
            <textarea
              name=""
              id=""
              placeholder="오늘의 영농 작업 상황을 자유롭게 기록해보세요."
            ></textarea>
            <div className={style.drawContainer}>
              <div className={style.choiceContainer}>
                <div className={style.radioContainer}>
                  <div>
                    <input type="radio" name="aiOption" defaultChecked />{" "}
                    &nbsp;AI 그림 사용하기
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="aiOption"
                      className={style.radio}
                    />{" "}
                    &nbsp;AI 직접 사진 첨부
                  </div>
                </div>
                <p>
                  농가 일지를 작성하면 AI가 글을 분석해 적절한 그림을
                  만들어줘요.
                </p>
                <br />
                <button type="submit">글 등록하기</button>
              </div>
              <div></div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Write;
