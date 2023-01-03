import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { selectArticle, setArticleList } from "../redux/articleSlice";
import {
  selectToken,
  selectAdminIsLogin,
  adminToLogin,
  adminLogout,
} from "../redux/adminSlice";
import { Link } from "react-router-dom";
import { useAllArticle } from "../react-query/index";
import articleListJson from "../json/articleList.json";
import { adminLogin, updateArticle } from "../api";
import { Input } from "antd";
// import {} from "../redux/adminSlice"

const AdminView = () => {
  const [showDelete, setShowDelete] = useState(false);
  // const articleList = useSelector(selectArticle);
  const dispatch = useDispatch();
  const { isLoading, data, refetch, isSuccess } = useAllArticle();
  const isLogin = useSelector(selectAdminIsLogin);
  const token = useSelector(selectToken);
  if (!token) {
    adminLogout();
  }
  console.log(token);
  // useEffect(() => {
  //   // setArticleList(data)
  //   if (data) {
  //     dispatch(setArticleList(data.data));
  //    console.log(data)
  //   }
  // }, [isSuccess]);

  useEffect(() => {
    console.log(showDelete);
    // window.scrollTo({top: 0})
  }, [showDelete]);
  const articleData = data?.data || ["aa", "aa"];
  //   const { type } = useParams();
  //   const typeObj = personalityJson.find((x) => x.typeLetter === type);
  //   console.log(typeObj);
  if (isLoading) {
    return <>Loading</>;
  }
  return (
    <>
      {!isLogin ? (
        <LoginModal />
      ) : (
        <>
          <Navbar posr={true} admin={true}></Navbar>
          <div className="big-container">
            <div className="manage-container">
              <div className="add-article">
                <img src="./images/add_article.png"></img>
                <Link className="link" to="/admin/edit/id">
                  <div className="add-article-text">新增文章</div>
                </Link>
              </div>
              <hr className="manage-bottomline" Size="2px" width="100%"></hr>
              {articleData.map((item) => (
                <ManageArticleCard
                  item={item}
                  setShowDelete={setShowDelete}
                  refetch={refetch}
                />
              ))}
            </div>
          </div>
          {showDelete ? <DeleteModal setShowDelete={setShowDelete} /> : ""}
        </>
      )}
    </>
  );
};

const ManageArticleCard = ({ item, setShowDelete, refetch }) => {
  const token = useSelector(selectToken);
  const publishOnClick = () => {
    let taglist = [];
    item.all_tags.forEach((tag) => {
      taglist.push(tag.id);
      // console.log(taglist)
    });
    const postArticle = updateArticle({
      article_id: Number(item.id),
      publish: Boolean(!item.publish),
      articleTitle: item.articleTitle,
      articleDescription: item.articleDescription,
      author_1: item.author_1,
      author_2: item.author_2,
      image: item.image,
      articleContent: item.articleContent,
      tags: taglist,
    },token);
    postArticle.then(
      function () {
        refetch();
      },
      function () {}
    );
  };
  return (
    <div className="articleCard-cont">
      <div className="manage-articleCard-textblock">
        <div className="manage-articleCard-title">{item.articleTitle}</div>
        <div className="manage-articleCard-description">
          {item.articleDescription}
        </div>
      </div>
      <div className="manage-articleCard-buttons-cont">
        <Link className="link" to={"/admin/edit/" + item.id}>
          <div className="manage-articleCard-button">修改</div>
        </Link>
        <div
          className="manage-articleCard-button"
          onClick={() => {
            setShowDelete(true);
          }}
        >
          刪除
        </div>
        {item.publish ? (
          <div
            className="manage-articleCard-button manage-articleCard-published"
            onClick={publishOnClick}
          >
            已發布
          </div>
        ) : (
          <div className="manage-articleCard-button" onClick={publishOnClick}>
            發布
          </div>
        )}
      </div>
    </div>
  );
};
const LoginModal = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  let res = "";

  function loginOnClick() {
    res = adminLogin(username, password);
    res.then(
      function (value) {
        console.log(value.data.access_token);
        dispatch(adminToLogin(value.data.access_token));
      },
      function () {}
    );
  }
  return (
    <div className="adminLogin">
      <Input
        className="edit-article-input"
        placeholder="username"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <Input
        className="edit-article-input"
        placeholder="password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <div
        className="manage-articleCard-button login-button"
        onClick={loginOnClick}
      >
        登入
      </div>
    </div>
  );
};
const DeleteModal = ({ setShowDelete }) => {
  return (
    <>
      <div className="delete-modal-cont">
        <div className="delete-modal">
          <div className="delete-modal-text mb50">確定刪除?</div>
          <div className="dsp-f">
            <div
              className="delete-modal-buttons mr50 "
              onClick={() => {
                setShowDelete(false);
              }}
            >
              取消
            </div>
            <div
              className="delete-modal-buttons active"
              onClick={() => {
                setShowDelete(false);
              }}
            >
              確定
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminView;
