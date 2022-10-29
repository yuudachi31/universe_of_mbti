import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Selectadmin, articleEditing } from "../redux/adminSlice";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import homeData from "../json/home.json";
import HomeSection from "../components/HomeSection";
// import {} from "../redux/adminSlice"
const HomeView = () => {
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
  //   console.log(homeData)
  //   console.log(admin);
  return (
    <>
      <Navbar posr={true}></Navbar>
      <div className="home-container">
        <div className="home-top">
          <div className="home-top-newcont">
            <div className="homeValue">
              <img className="homeTitle" src="./images/Frame.png"></img>
              <div className="homeSlogan homeSlogan-text">透過MBTI來認識</div>
              <div className="homeSlogan homeSlogan-text">誕生於宇宙中</div>
              <div className="homeSlogan homeSlogan-text">獨一無二的自己</div>
              <Link className="go-btn homeSlogan-text" to="/worldView">
                世界觀 GO!
              </Link>
            </div>
            <img className="homebg1" src="./images/cover.png"></img>

          </div>

          {/* <img className="down-btn" src="./images/downBtn.png"></img> */}
        </div>

        <div className="home-content">
          {homeData.map((item) => {
            return <HomeSection item={item}></HomeSection>;
          })}
        </div>
      </div>
    </>
  );
};

export default HomeView;
