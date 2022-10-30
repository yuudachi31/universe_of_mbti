import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import articleJson from "../json/articleList.json"
import { Link } from "react-router-dom";
import styled from "styled-components";

// import {} from "../redux/adminSlice"
const articleData=articleJson[0]


const ArticleView = () => {
  useEffect(() => {
    window.scrollTo({top: 0})
  }, []);
  const { type } = useParams();
  
  return (
    <>
      <Navbar></Navbar>
      <div className="big-container">
<div className="article-detail-cont">
  <div className="article-detail-bigtitle">
    {articleData.articleTitle}
  </div>
  <div className="article-detail-author-date">
    {
      articleData.author.map((item)=>(
<div>
  {item}
</div>
      ))
  
    }
        <div>{articleData.date2}</div>
  </div>
<img className="article-detail-images"src="/images/article_img.png"></img>
{
  
  articleData.articleContent.map((item)=>(
    <div
    dangerouslySetInnerHTML={{ __html: item }}
  ></div>


   
  ))
}


</div>
        <Footer/>
      </div>
    </>
  );
};


export default ArticleView;
