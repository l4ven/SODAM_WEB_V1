import React, { useState } from "react";
import Post from "../../../../components/Post/Post";
import { posts } from "../../../../data/postData";
import Header from "../../../../components/Header/UserHeader/Header";
import style from "./style.module.css";
import Notice from "../../../../assets/notice.png";
import Footer from "../../../../components/Footer/Footer";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("청과");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts = posts.filter((post) => {
    if (selectedCategory === "청과") return !post.studyOrProject;
    if (selectedCategory === "축산") return post.studyOrProject;
    return selectedCategory === "청과";
  });

  return (
    <>
      <Header />
      <main className={style.mainContainer}>
        <div className={style.notice}>
          <img src={Notice} alt="공고문" className={style.noticeImg} />
        </div>

        <section className={style.projectSection}>
          <div className={style.inner}>
            <div className={style.tabs}>
              {["청과", "축산", "양곡"].map((category) => (
                <span
                  key={category}
                  className={`${style.tab} ${
                    selectedCategory === category ? style.active : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </span>
              ))}
            </div>
            <div className={style.postGrid}>
              {filteredPosts.reverse().map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  image={post.image}
                  sellerName={post.sellerName}
                  productName={post.productName}
                  price={post.price}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
