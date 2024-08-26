import React, { useState } from "react";
import style from "./style.module.css";
import Header from "../../../../components/Header/SellerHeader/Header";
import Aside from "./Aside/Aside";
import { MdFileUpload } from "react-icons/md";

const MyPage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className={style.menu}>
            <h1>마이샵 홈</h1>
            <div className={style.userContainer}>
              <span>사용자</span>님, 환영합니다.
            </div>
          </div>
        );
      case "product-registration":
        return (
          <div className={style.menu}>
            <h1>상품등록</h1>
            <form className={style.productReg}>
              <div className={style.inputSection}>
                <div className={style.dateContainer}>
                  <div className={style.dateTitle}>카테고리</div>
                  <div className={style.inputContainer}>
                    <select name="category" className={style.option}>
                      <option value="">전체</option>
                      <option value="category1">청과</option>
                      <option value="category2">축산</option>
                      <option value="category3">양곡</option>
                    </select>
                  </div>
                </div>
                <div className={style.dateContainer}>
                  <div className={style.dateTitle}>상품명</div>
                  <div className={style.inputContainer}>
                    <input type="text" name="productName" />
                  </div>
                </div>
                <div className={style.dateContainer}>
                  <div className={style.dateTitle}>희망단가</div>
                  <div className={style.inputContainer}>
                    <input type="text" name="price" />
                    &nbsp; 원
                  </div>
                </div>
                <div className={style.fileSection}>
                  <label htmlFor="fileInput" className={style.fileButton}>
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="미리보기"
                        className={style.previewImage}
                      />
                    ) : (
                      <span className={style.fileButtonIcon}>
                        <MdFileUpload className={style.fileImg} /> <br />
                        <span>사진 첨부</span>
                      </span>
                    )}
                    <input
                      type="file"
                      id="fileInput"
                      className={style.fileInput}
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </label>
                  <div className={style.fileName}>
                    {selectedFile ? selectedFile.name : "파일을 선택하세요"}
                  </div>
                </div>
              </div>
              <button type="submit" className={style.submitButton}>
                등록하기
              </button>
            </form>
          </div>
        );
      case "inventory-management":
        return (
          <div className={style.menu}>
            <h1>재고관리</h1>
            <form action="">
              <div className={style.inventoryInputSection}>
                <div className={style.inventoryDateContainer}>
                  <div className={style.inventoryDateTitle}>카테고리</div>
                  <div className={style.inventoryInputContainer}>
                    <select name="category" className={style.inventoryOption}>
                      <option value="">전체</option>
                      <option value="category1">청과</option>
                      <option value="category2">축산</option>
                      <option value="category3">양곡</option>
                    </select>
                  </div>
                </div>
                <div className={style.inventoryDateContainer}>
                  <div className={style.inventoryDateTitle}>상품명</div>
                  <div className={style.inventoryInputContainer}>
                    <input type="text" name="productName" />
                  </div>
                </div>
              </div>
              <div className={style.inventoryDateContainer}>
                <div className={style.inventoryDateTitle}>등록기간</div>
                <div className={style.inventoryInputContainer}>
                  <input type="date" name="startDate" />
                  &nbsp;~&nbsp;
                  <input type="date" name="endDate" />
                </div>
              </div>
              <div className={style.btnContainer}>
                <button type="submit" className={style.inventorySubmitButton}>
                  검색
                </button>
                <button className={style.inventorySetButton}>초기화</button>
              </div>
            </form>
          </div>
        );
      case "returns-exchange":
        return (
          <div className={style.menu}>
            <h1>반품/교환 내역</h1>
          </div>
        );
      case "settlement":
        return (
          <div className={style.menu}>
            <h1>정산관리</h1>
            <form action="">
              <div className={style.inventoryDateContainer}>
                <div className={style.inventoryDateTitle}>기준일</div>
                <div className={style.inventoryInputContainer}>
                  <input type="date" name="startDate" />
                  &nbsp;~&nbsp;
                  <input type="date" name="endDate" />
                </div>
              </div>
              <div className={style.inventoryDateContainer}>
                <div className={style.inventoryDateTitle}>최종 지급 예정액</div>
                <div className={style.inventoryInputContainer}>
                  <span>1,022</span>
                </div>
              </div>
            </form>
          </div>
        );
      case "profile":
        return (
          <div className={style.menu}>
            <form action="">
              <button type="submit" className={style.inventorySubmitButton}>
                로그아웃
              </button>
            </form>
          </div>
        );
      default:
        return <div>기본 콘텐츠</div>;
    }
  };

  return (
    <>
      <Header />
      <main className={style.myPageContainer}>
        <Aside setActiveSection={setActiveSection} />
        <div className={style.mainContent}>{renderContent()}</div>
      </main>
    </>
  );
};

export default MyPage;
