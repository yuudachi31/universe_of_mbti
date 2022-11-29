import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import articleJson from "../json/articleList.json";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// import {} from "../redux/adminSlice"
const articleData = articleJson[0];
// const Container = styled.div`
//   width: 400px;
//   height: 500px;
//   padding: 13px;
//   background-color: #c1f5f5;
// `;
// const TextArea = styled.textarea`
//   width: 100%;
//   height: 200px;
//   resize: none;
//   border: none;
//   outline: none;
//   font-size: 17px;
// `;
// const ResultArea = styled.div`
//   width: 100%;
//   height: 100%;
//   font-size: 17px;
// `;
const MarkdownArticleDetailStyled=styled.div`
  width: 100%;
  p{
    font-size: 25px;
    font-family: 'ヒラギノ角ゴ ProN W6';
  }
`;



const ArticleView = () => {
  const [value, setValue] = useState("");
  const [articleValue,setArticle]=useState("")
  const onInputChange = (e) => {
    console.log(JSON.stringify("string: "+e.target.value));
   
    let aaa = JSON.stringify(e.target.value);
    console.log("parse: "+JSON.parse(aaa));
    setValue(JSON.parse(aaa));
    // setValue(e.target.value)
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    console.log(JSON.stringify(articleData.articleContent))
    let testStr = articleData.articleContent
    // let testStr = articleData.articleContent
    console.log( JSON.stringify(testStr))
    console.log(JSON.parse(JSON.stringify(testStr)))
    setArticle(JSON.parse(JSON.stringify(testStr)))
    // console.log(JSON.parse(JSON.stringify(articleData.articleContent)))
    // setArticle(JSON.parse(JSON.stringify(articleData.articleContent)))
  }, []);
  const { type } = useParams();

  return (
    <>
      <Navbar posr={true}></Navbar>
      <div className="big-container">
        <div className="article-detail-cont">
          <div className="article-detail-bigtitle">
            {articleData.articleTitle}
          </div>
          <div className="article-detail-author-date">
            {articleData.author.map((item) => (
              <div>{item}</div>
            ))}
            <div>{articleData.date2}</div>
          </div>
          <img
            className="article-detail-images"
            src="/images/article_img.png"
          ></img>
          {/* {articleData.articleContent.map((item) => (
            <div dangerouslySetInnerHTML={{ __html: item }}></div>
          ))} */}
          <MarkdownArticleDetailStyled>
             <ReactMarkdown source="">{ articleValue}</ReactMarkdown>
          </MarkdownArticleDetailStyled>


          {/* <Container>
            <TextArea
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            <ResultArea>  
              <ReactMarkdown source="# Hello">{value}</ReactMarkdown>
            </ResultArea>
          </Container> */}

          <hr
            className="article-detail-bottomline"
            Size="2px"
            width="100%"
          ></hr>
          <div className="article-detail-link-cont">
            <div className="copy-link-subcont">
              <div className="copy-link">點我複製連結</div>
              <img src="/images/article_link.png"></img>
            </div>
          </div>
          <div className="change-article-bigcont">
            <div className="change-article-title">閱讀下一篇：</div>
            <div className="change-article-subcont">
              <ChangeArticleCard />
              <ChangeArticleCard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const ChangeArticleCard = ({ item }) => {
  return (
    <Link className="link" to="/article/id">
      <div className="change-articleCard-cont">
        <div className="articleCard-textblock">
          <div className="articleCard-title"> {articleData.articleTitle}</div>
          <div className="change-articleCard-description">
            {articleData.articleDescription}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleView;
