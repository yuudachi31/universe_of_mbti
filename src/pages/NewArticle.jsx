import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import { selectArticle, setArticleList } from "../redux/articleSlice";
import { useAllArticle, useOneArticle } from "../react-query/index";
import articleListJson from "../json/articleList.json";
import { Input } from "antd";
import {
  selectToken,
  selectAdminIsLogin,
  adminToLogin,
  adminLogout,
} from "../redux/adminSlice";
import { adminLogin, updateArticle } from "../api";
const { TextArea } = Input;
// import {} from "../redux/adminSlice"
const tagsList = [
  "INTJ",
  "INTP",
  "ENTJ",
  "ENTP",
  "INFJ",
  "INFP",
  "ENFJ",
  "ENFP",
  "ISTJ",
  "ISFJ",
  "ESTJ",
  "ESFJ",
  "ISTP",
  "ISFP",
  "ESTP",
  "ESFP",
];

const NewArticleView = () => {
  const token = useSelector(selectToken);
  const [selectedTags, setSelectedTags] = useState([]);
  const { articleId } = useParams();
  const [titleValue,setTitleValue]= useState("")
  const { targetArticle, isLoading, refetch, isSuccess } =
    useOneArticle(articleId);
    const [selectedTagList,setTagList]=useState("")
  const [articleData, setArticleData] = useState(
    {
    publish: true,
    all_tags: [{ tag: "", id: 0 }],
    articleTitle: "stng",
    image: "string",
    id: 0,
    date: "OCT 24",
    date2: new Date(),
    author_1: "string",
    author_2: "string",
    articleContent: " ",
  }
  );

// console.log(articleData)
  useEffect(() => {
    let taglist = [];
    // 關鍵
    setTitleValue(targetArticle?.articleTitle)
    setArticleData(targetArticle)
    targetArticle?.all_tags.forEach((tag) => {
      taglist.push(tag.id);
      // console.log(taglist)
    });
    setTagList(taglist)
  }, [isSuccess]);
  
  // console.log(articleData);
  const tagOnClick = (e) => {
    console.log("s");
    let type = e.target.innerHTML;
    let num = tagsList.indexOf(type)+1
    if (selectedTagList.find((item) => item === num)) {
      selectedTagList.forEach((item, index) => {
        let arr = selectedTagList;
        if (item === num) {
          arr.splice(index, 1);
          setTagList([...arr]);
        }
      });
    } else {
      setTagList([...selectedTagList, num]);
    }
    console.log(selectedTagList);
  };
  
  useEffect(() => {
    // window.scrollTo({top: 0})
  }, []);
  //   const { type } = useParams();
  //   const typeObj = personalityJson.find((x) => x.typeLetter === type);
  //   console.log(typeObj);
  const [value, setValue] = useState("");
  const onInputChange = (e) => {
    console.log(JSON.stringify(e.target.value));
    // let aaa = JSON.stringify(e.target.value);
    // setValue(JSON.parse(aaa));
  };

  async function filterArticleById(m) {
    let articleList = await targetArticle
    
    return articleList;
  }
  function successCallback(result) {
    setArticleData(result);
    setTitleValue(result.articleTitle)
  }
  function failureCallback(error) {
    console.log("It failed with " + error);
  }

  // const articleData2 = filterArticleById();
  // articleData2.then(successCallback, failureCallback);
const StoreOnClick = ()=>{
  let taglist = [];
  articleData.all_tags.forEach((tag) => {
      taglist.push(tag.id);
      // console.log(taglist)
    });
    console.log(selectedTagList)
    const postArticle = updateArticle({
      article_id: Number(articleData.id),
      publish: Boolean(!articleData.publish),
      articleTitle: articleData.articleTitle,
      articleDescription: articleData.articleDescription,
      author_1: articleData.author_1,
      author_2: articleData.author_2,
      image: articleData.image,
      articleContent: articleData.articleContent,
      tags: selectedTagList,
    },token);
    postArticle.then(
      function () {
        refetch();
      },
      function () {}
    );
}
  if (isLoading) return <>Loading</>;
  return (
    <>
      <Navbar posr={true} admin={true}></Navbar>
      <div className="big-container">
        <div className="edit-article-cont">
          <div className="edit-article-bigtitle">編輯文章</div>
          <Input
            className="edit-article-input"
            placeholder="請輸入標題"
            value={articleData?.articleTitle}
            // onChange={(e)=>{setTitleValue(e.target.value)}}
            onChange={(e)=>{setArticleData( {
              publish: articleData.publish,
              all_tags: articleData.all_tags,
              articleTitle: e.target.value,
              image: articleData.image,
              id: articleData.id,
              date: articleData.date,
              date2: articleData.date2,
              author_1:articleData.author_1,
              author_2: articleData.author_2,
              articleContent: articleData.articleContent,
            })}}
          />
          <Input
            className="edit-article-input"
            placeholder="作者名稱（可省略）"
            value={articleData?.author_1}
            onChange={(e)=>{setArticleData( {
              publish: articleData.publish,
              all_tags: articleData.all_tags,
              articleTitle: articleData.articleTitle,
              image: articleData.image,
              id: articleData.id,
              date: articleData.date,
              date2: articleData.date2,
              author_1:e.target.value,
              author_2: articleData.author_2,
              articleContent: articleData.articleContent,
            })}}
          />
          <Input
            className="edit-article-input mb50"
            placeholder="譯者名稱（可省略）"
            value={articleData?.author_2}
            onChange={(e)=>{setArticleData( {
              publish: articleData.publish,
              all_tags: articleData.all_tags,
              articleTitle: articleData.articleTitle,
              image: articleData.image,
              id: articleData.id,
              date: articleData.date,
              date2: articleData.date2,
              author_1:articleData.author_1,
              author_2: e.target.value,
              articleContent: articleData.articleContent,
            })}}
          />
          <div className="edit-article-add-img ">
            <img src="/images/add_article.png"></img>
            <div className="edit-article-add-img-text">新增封面圖片</div>
          </div>
          <div className="edit-article-add-img">
            <img src="/images/add_article.png"></img>
            <div className="edit-article-add-img-text">新增内文圖片</div>
          </div>

          <div className="dsp-f mt40">
            <img src="/images/bold-text.png"></img>
            <img className="ml25" src="/images/list-text.png"></img>
          </div>
          <TextArea
            className="edit-article-textarea mb50"
            rows={10}
            placeholder="開始填寫內容"
            value={articleData?.articleContent}
            onChange={(e)=>{setArticleData( {
              publish: articleData.publish,
              all_tags: articleData.all_tags,
              articleTitle: articleData.articleTitle,
              image: articleData.image,
              id: articleData.id,
              date: articleData.date,
              date2: articleData.date2,
              author_1:articleData.author_1,
              author_2: articleData.author_2,
              articleContent: e.target.value,
            })}}
          ></TextArea>

          <div className="">
            <div className="article-tags-title">標籤選擇</div>
            <div className="edit-article-tags dsp-f">
              {tagsList.map((tag, index) => (
                <ArticleEachTag
                  tagOnClick={tagOnClick}
                  selectedTags={selectedTagList}
                  setTagList={setTagList}
                  tag={tag}
                  num={index+1}
                ></ArticleEachTag>
              ))}
            </div>
          </div>
          <div className="edit-article-save" onClick={StoreOnClick}>儲存</div>
        </div>
      </div>
    </>
  );
};
const ArticleEachTag = ({ selectedTags,setTagList, tagOnClick, tag,num}) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const toggle = selectedTags.find((item) => item === num);
    if (toggle) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [selectedTags]);
  // console.log(selectedTags);

  return (
    <div
      className={
        active
          ? "article-each-tag article-each-active mr10 mb25"
          : "article-each-tag mr10 mb25"
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

export default EditArticleView;
