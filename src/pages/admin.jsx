import { useDispatch, useSelector } from "react-redux";
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

import articleListJson from "../json/articleList.json";
// import {} from "../redux/adminSlice"
const tagsList = [
  ["INTJ", "INTP", "ENTJ", "ENTP"],
  ["INFJ", "INFP", "ENFJ", "ENFP"],
  ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
  ["ISTP", "ISFP", "ESTP", "ESFP"],
];
const AdminView = () => {
    const [showDelete,setShowDelete]=useState(false)
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
    console.log(showDelete)
    // window.scrollTo({top: 0})
  }, [showDelete]);
  //   const { type } = useParams();
  //   const typeObj = personalityJson.find((x) => x.typeLetter === type);
  //   console.log(typeObj);
  return (
    <>
      <Navbar posr={true}admin={true}></Navbar>
      <div className="big-container">
   
        <div className="manage-container">
        <div className="add-article">
            <img src="./images/add_article.png"></img>
            <Link className="link" to="/admin/edit/id">
            <div className="add-article-text">
                  新增文章
            </div>
            </Link>
        </div>
        <hr className="manage-bottomline" Size="2px"  width="100%"></hr>
        {
            articleListJson.map((item)=>(
                <ManageArticleCard item={item} setShowDelete={setShowDelete}/>
            ))
        }
        </div>
    
      </div>
      {showDelete?(<DeleteModal setShowDelete={setShowDelete}/>):("")}
    </>
  );
};



const ManageArticleCard = ({ item,setShowDelete }) => {
 
  return (
  
     <div className="articleCard-cont">
      <div className="manage-articleCard-textblock">
        <div className="manage-articleCard-title">{item.articleTitle}</div>
        <div className="manage-articleCard-description">{item.articleDescription}</div>
        
      </div>
     <div className="manage-articleCard-buttons-cont">
     <Link className="link" to="/admin/edit/id">
<div className="manage-articleCard-button">修改</div>
</Link>
<div className="manage-articleCard-button" onClick={()=>{setShowDelete(true)}}>刪除</div>
{
    item.publish?(<div className="manage-articleCard-button manage-articleCard-published">已發布</div>):(<div className="manage-articleCard-button">發布</div>)
}




     </div>
    </div>

   
  );
};

const DeleteModal =({setShowDelete})=>{
return(
    <>
    <div className="delete-modal-cont">
        <div className="delete-modal">
            <div className="delete-modal-text mb50">
            確定刪除?
            </div>
            <div className="dsp-f">
<div className="delete-modal-buttons mr50 " onClick={()=>{setShowDelete(false)}} >
    取消
</div>
<div className="delete-modal-buttons active" onClick={()=>{setShowDelete(false)}}>
    確定
</div>
            </div>
        </div>
    </div>
    </>
)
}
export default AdminView;
