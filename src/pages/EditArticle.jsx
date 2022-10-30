import { useDispatch, useSelector } from "react-redux";
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

import articleListJson from "../json/articleList.json";
import { Input } from 'antd';
const { TextArea } = Input;
// import {} from "../redux/adminSlice"
const tagsList = [
  "INTJ", "INTP", "ENTJ", "ENTP",
  "INFJ", "INFP", "ENFJ", "ENFP",
  "ISTJ", "ISFJ", "ESTJ", "ESFJ",
  "ISTP", "ISFP", "ESTP", "ESFP",
];
const EditArticleView = () => {
  const [selectedTags,setSelectedTags] = useState([])

  const tagOnClick = (e)=>{
    console.log("s")
let type=e.target.innerHTML
if(selectedTags.find((item)=>item===type)){

  selectedTags.forEach((item, index)=>{
    let arr = selectedTags
    if(item===type){
      arr.splice(index,1)
      setSelectedTags([...arr])
    }
  })
}else{

  setSelectedTags([...selectedTags,type])
}
console.log(selectedTags)
  }

  useEffect(() => {
    // window.scrollTo({top: 0})
  }, []);
  //   const { type } = useParams();
  //   const typeObj = personalityJson.find((x) => x.typeLetter === type);
  //   console.log(typeObj);
  return (
    <>
      <Navbar posr={true}admin={true}></Navbar>
      <div className="big-container">
        <div className="edit-article-cont">
     
            <div className="edit-article-bigtitle">
                  新增文章
            </div>
     <Input className="edit-article-input"placeholder="請輸入標題"/>
     <Input className="edit-article-input"placeholder="作者名稱（可省略）"/>
     <Input className="edit-article-input mb50"placeholder="作者名稱2（可省略）"/>
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
<img className="ml25"src="/images/list-text.png"></img>
</div>
<TextArea className="edit-article-textarea mb50"rows={10} placeholder="開始填寫內容"  />
<div className="">
              <div className="article-tags-title">標籤選擇</div>
              <div className="edit-article-tags dsp-f">
                {tagsList.map((tag, index) => (
                
                      <ArticleEachTag   tagOnClick={tagOnClick}selectedTags={selectedTags} tag={tag}></ArticleEachTag>
                   
                ))}
              </div>
            </div>
            <div className="edit-article-save">
                儲存
            </div>
        </div>
    
      </div>
    </>
  );
};
const ArticleEachTag = ({selectedTags,tagOnClick,tag})=>{
    const [active,setActive]=useState(false)
    useEffect(()=>{
      const toggle = selectedTags.find((item)=>item===tag)
      if (toggle){
        setActive(true)
      }else{
        setActive(false)
      }
    },[selectedTags])
    console.log(selectedTags)

    return(
      <div className={active?"article-each-tag article-each-active mr10 mb25":"article-each-tag mr10 mb25"}  onClick={(e)=>{tagOnClick(e) }}>{tag}</div>
      // <div className="article-each-tag" selectedTag={selectedTags} onClick={(e)=>tagOnClick(e)}>{tag}</div>
   
    )
  
  }



export default EditArticleView;
