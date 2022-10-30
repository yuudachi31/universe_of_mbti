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

<hr className="article-detail-bottomline" Size="2px"  width="100%"></hr>
<div className="article-detail-link-cont">
  <div className="copy-link-subcont">
  <div className="copy-link">點我複製連結</div>
  <img src="/images/article_link.png"></img>
  </div>
</div>
<div className="change-article-bigcont">
<div className="change-article-title">閱讀下一篇：</div>
<div className="change-article-subcont">
   <ChangeArticleCard/>
<ChangeArticleCard/>
</div>
 
</div>

</div>
        <Footer/>
      </div>
    </>
  );
};

const ChangeArticleCard = ({ item }) => {
 
  return (
    <Link className="link" to="/article/id">
     <div className="change-articleCard-cont">
     
      <div className="articleCard-textblock">
        <div className="articleCard-title">    {articleData.articleTitle}</div>
        <div className="change-articleCard-description">{articleData.articleDescription}</div>
     
      </div>
    
    </div>
    </Link>
   
  );
};

export default ArticleView;
