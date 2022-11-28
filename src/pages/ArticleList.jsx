
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import personalityJson from "../json/personality.json";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {selectSelectTag,setSelectedTags} from "../redux/selectTagSlice"
import articleListJson from "../json/articleList.json";
import {selectArticle} from "../redux/articleSlice"
// import {} from "../redux/adminSlice"
const tagsList = [
  ["INTJ", "INTP", "ENTJ", "ENTP"],
  ["INFJ", "INFP", "ENFJ", "ENFP"],
  ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
  ["ISTP", "ISFP", "ESTP", "ESFP"],
];
const ArticleList = () => {
  // const [selectedTags, setSelectedTags] = useState([]);
const selectedTags = useSelector(selectSelectTag)
const articleList = useSelector(selectArticle)
const dispatch = useDispatch();
  const tagOnClick = (e) => {
  // console.log("s");
  let type = e.target.innerHTML;
  if (selectedTags.find((item) => item === type)) {
    selectedTags.forEach((item, index) => {
      let arr = [...selectedTags];
      if (item === type) {
        arr.splice(index, 1);
        // setSelectedTags([...arr]);
        dispatch(
          setSelectedTags([...arr])
        )
      }
    });
  } else {
    dispatch(
    setSelectedTags([...selectedTags, type])
    )
  }
  console.log(selectedTags);
};

  // const tagOnClick = (e) => {
  //   // console.log("s");
  //   let type = e.target.innerHTML;
  //   if (selectedTags.find((item) => item === type)) {
  //     selectedTags.forEach((item, index) => {
  //       let arr = selectedTags;
  //       if (item === type) {
  //         arr.splice(index, 1);
  //         setSelectedTags([...arr]);
  //       }
  //     });
  //   } else {
  //     setSelectedTags([...selectedTags, type]);
  //   }
  //   console.log(selectedTags);
  // };

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
            <div className="rounded-bottom-line"></div>
          </div>
          <div className="article-content-container">
            <div className="articleList">
              {articleList.map((item) => (
                <ArticleCard item={item} />
              ))}
            </div>
            <div className="article-tags-cont">
              <div className="article-tags-title">標籤選擇</div>
              <div className="article-tags">
                {tagsList.map((qtaglist, index) => (
                  <div className="taglist-row">
                    {qtaglist.map((tag) => (
                      <ArticleEachTag
                        tagOnClick={tagOnClick}
                        selectedTags={selectedTags}
                        tag={tag}
                      ></ArticleEachTag>
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

const ArticleEachTag = ({ selectedTags, tagOnClick, tag }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const toggle = selectedTags.find((item) => item === tag);
    if (toggle) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [selectedTags]);
  console.log(selectedTags);

  return (
    <div
      className={
        active ? "article-each-tag article-each-active" : "article-each-tag"
      }
      onClick={(e) => {
        tagOnClick(e);
      }}
    >
      {tag}
    </div>
    // <div className="article-each-tag" selectedTag={selectedTags} onClick={(e)=>tagOnClick(e)}>{tag}</div>
  );
};

const ArticleCard = ({ item }) => {
  return (
    <Link className="link" to="/article/id">
      <div className="articleCard-cont">
        <div className="articleCard-textblock">
          <div className="articleCard-title">{item.articleTitle}</div>
          <div className="articleCard-description">
            {item.articleContent}
          </div>
          <div className="articleCard-date-tags">
            <div className="articleCard-date">{item.date}</div>
            <div className="articleCard-tags">{item.tags}</div>
          </div>
        </div>
        <div className="articleCard-img"></div>
      </div>
    </Link>
  );
};
export default ArticleList;
