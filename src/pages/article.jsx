import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import articleJson from "../json/articleList.json";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { selectArticle, setArticleList } from "../redux/articleSlice";
import { useAllArticle } from "../react-query/index";
// import {} from "../redux/adminSlice"

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
const MarkdownArticleDetailStyled = styled.div`
  width: 100%;
  p {
    font-size: 25px;
    font-family: "ヒラギノ角ゴ ProN W6";
  }
`;

const ArticleView = () => {
  // const articleData = useSelector(selectArticle);
  const [value, setValue] = useState("");
  const [articleValue, setArticle] = useState("");
  const [filtedArticle, setFiltedArticle] = useState([]);
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [nextArticle1,setNextArticle1]= useState("");
  const [nextArticle2,setNextArticle2]= useState("");
  const { isLoading, data, refetch, isSuccess } = useAllArticle("none");

  const { articleId } = useParams();
  // articleId= JSON.parse(articleId)
  // console.log(typeof articleId)
  // let articleData = filterArticleById()

  useEffect(() => {
    window.scrollTo({ top: 0 });
    // console.log(JSON.stringify(articleData.articleContent))
    // let testStr = articleData.articleContent

    // if(testStr){
    //   setArticle(JSON.parse(JSON.stringify(testStr)))
    //   console.log(articleValue)
    // }

    // console.log(JSON.parse(JSON.stringify(articleData.articleContent)))
    // setArticle(JSON.parse(JSON.stringify(articleData.articleContent)))
  }, []);

  const onInputChange = (e) => {
    console.log(JSON.stringify("string: " + e.target.value));

    let aaa = JSON.stringify(e.target.value);
    console.log("parse: " + JSON.parse(aaa));
    setValue(JSON.parse(aaa));
    // setValue(e.target.value)
  };
  async function filterArticleById(idNum) {
    let articleList = await data?.data;
    let article = articleList.find(function (item, index, array) {
      console.log(idNum);
      console.log(item.id);
      return item.id === Number(idNum);
    });
    let article2 = articleList.find(function (item, index, array) {
      console.log(idNum);
      console.log(item.id);
      return item.id > Number(idNum);
    });
    setNextArticle1(article2)
    let article3 = articleList.find(function (item, index, array) {
      console.log(idNum);
      console.log(item.id);
      return item.id > Number(article2?.id);
    });
    setNextArticle2(article3)

    return article;
  }
  function successCallback(result) {
    setArticle(result);
  }
  function failureCallback(error) {
    console.log("It failed with " + error);
  }
  const articleData = filterArticleById(articleId);
  // console.log(articleData.result);
  articleData.then(successCallback, failureCallback);
  // const { type } = useParams();
async function getNextId1(){
  let articleList = await data?.data;
    let article = articleList.find(function (item, index, array) {
    
      return item.id > Number(articleId);
    });
    if(article)
   setId1(article.id)
  //  console.log(article.id)
  
}
async function getNextId2(){
  let articleList = await data?.data;
    let article = articleList.find(function (item, index, array) {
     
      return item.id > Number(id1);
    });
    if(article)
   setId2(article.id)
    // console.log(article.id)
}
getNextId1();
getNextId2();
  if (isLoading) return <>Loading</>;
  return (
    <>
      <Navbar posr={true}></Navbar>
      <div className="big-container">
        <div className="article-detail-cont">
          <div className="article-detail-bigtitle">
            {articleValue.articleTitle}
          </div>
          <div className="article-detail-author-date">
           { 
            articleValue.author_1?(<div>{articleValue.author_1}</div>):(<></>)}
{
  articleValue.author_2?(<div>翻譯: {articleValue.author_2}</div>):(<></>)
}
            
          </div>
          {articleValue.image !== "string" ? (
            <img className="article-detail-images" src={articleValue.image}></img>
          ) : (
            <img
              className="article-detail-images"
              src="/images/article_img.png"
            ></img>
          )}

          {/* {articleData.articleContent.map((item) => (
            <div dangerouslySetInnerHTML={{ __html: item }}></div>
          ))} */}
          <MarkdownArticleDetailStyled>
            <ReactMarkdown source="">{articleValue.articleContent}</ReactMarkdown>
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
            size="2px"
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
              <ChangeArticleCard articleId={articleId} setId1={setId1} setId2={setId2} getid={id1} nextArticle={nextArticle1}/>
              <ChangeArticleCard  articleId={articleId} setId1={setId1} setId2={setId2} getid={id2} nextArticle={nextArticle2}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const ChangeArticleCard = ({getid,nextArticle}) => {
    const articleList = useSelector(selectArticle);
  const [articleValue, setArticle] = useState("");
  const { articleId } = useParams();
  // async function filterArticleById() {
  
  //   let article = articleList.find(function (item, index, array) {
  //     // console.log(articleId);
  //     // console.log(item.id);
  //     return item.id === Number(getid);
  //   });
  //   if(article){return article;}
  //   else {
  //   return []
  //   }
    

  // }
 
  // function successCallback(result) {
  //   setArticle(result);
   
  // }

  // function failureCallback(error) {
  //   console.log("It failed with " + error);
  // }
  // let articleData = ""
  // if(getid){
  //   console.log(getid)
  //   articleData =filterArticleById();
  //   // console.log(articleData.result);
  //   articleData.then(successCallback, failureCallback);
  // }
  
  // if (isLoading) return <>Loading</>;
  
  return (
    nextArticle?(<a className="link" href={"/article/"+nextArticle.id}>
    <div className="change-articleCard-cont">
      <div className="articleCard-textblock">
        <div className="articleCard-title"> {nextArticle.articleTitle}</div>
        <div className="change-articleCard-description">
          {nextArticle.articleDescription}
        </div>
      </div>
    </div>
  </a>):(null)
    
  );
};

export default ArticleView;
