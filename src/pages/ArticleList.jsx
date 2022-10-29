import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import personalityJson from "../json/personality.json";
import { Link } from "react-router-dom";
import styled from "styled-components";
import articleListJson from "../json/articleList.json";
// import {} from "../redux/adminSlice"
const tagsList = [
  ["INTG", "INTP", "ENTJ", "ENTP"],
  ["INFJ", "INFP", "ENFJ", "ENFP"],
  ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
  ["ISTP", "ISFP", "ESTP", "ESFP"],
];
const ArticleList = () => {
  useEffect(() => {
    // window.scrollTo({top: 0})
  }, []);
  //   const { type } = useParams();
  //   const typeObj = personalityJson.find((x) => x.typeLetter === type);
  //   console.log(typeObj);
  return (
    <>
      <Navbar></Navbar>
      <div className="big-container">
        <div className="article-container">
          <div className="personality-top">
            <div className="personality-top-left">
              <img className="article-slogan" src="/images/articleSlogan.svg" />
              <img className="article-downBtn" src="/images/downBtn.png" />
            </div>
            <div className="personality-top-right">
              <img
                className="personality-top-image pbg"
                src="/images/article_cover.png"
              />
            </div>
            <div className="bottom-line"></div>
          </div>
          <div className="article-content-container">
            <div className="articleList">
              {articleListJson.map((item) => (
                <ArticleCard item={item} />
              ))}
            </div>
            <div className="article-tags-cont">
              <div className="article-tags-title">標籤選擇</div>
              <div className="article-tags">
                {tagsList.map((qtaglist, index) => (
                  <div className="taglist-row">
                    {qtaglist.map((tag) => (
                      <div className="article-each-tag">{tag}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const ArticleCard = ({ item }) => {
  return (
    <div className="articleCard-cont">
      <div className="articleCard-textblock">
        <div className="articleCard-title">{item.articleTitle}</div>
        <div className="articleCard-description">{item.articleDescription}</div>
        <div className="articleCard-date-tags">
          <div className="articleCard-date">{item.date}</div>
          <div className="articleCard-tags">{item.tags}</div>
        </div>
      </div>
      <div className="articleCard-img"></div>
    </div>
  );
};
export default ArticleList;
