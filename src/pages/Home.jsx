import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Selectadmin, articleEditing } from "../redux/adminSlice";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// import {} from "../redux/adminSlice"
const Homeview = () => {
  useEffect(() => {
    EditArticle();
  }, []);
  const admin = useSelector(Selectadmin);
  const dispatch = useDispatch();
  console.log(admin);
  const EditArticle = () => {
    dispatch(
      articleEditing({
        id: 1,
        normalContent: "aaaaaasdsd",
      })
    );
  };

  console.log(admin);
  return (
    <>
      <Navbar></Navbar>
      <div className="home-container">
        <img className="homebg1" src="./images/Group.png"></img>
        <div className="homeValue">
          <img className="homeTitle" src="./images/Frame.png"></img>
          <div className="homeSlogan homeSlogan-text">透過MBTI來認識</div>
          <div className="homeSlogan homeSlogan-text">誕生於宇宙中</div>
          <div className="homeSlogan homeSlogan-text">獨一無二的自己</div>
          <Link className="go-btn homeSlogan-text" to="/worldView">
            世界觀 GO!
          </Link>
        </div>
        <img className="down-btn" src="./images/downBtn.png"></img>

      </div>
    </>
  );
};

export default Homeview;
