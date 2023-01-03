import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectadmin, articleEditing } from "../redux/adminSlice";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import homeData from "../json/home.json";
import Banner from "../components/Banner";
import MobileBanner from "../components/MobileBanner"
import HomeSection from "../components/HomeSection";
import MediaQuery from "react-responsive";
// import {} from "../redux/adminSlice"
const HomeView = () => {
  useEffect(() => {
    EditArticle();
  }, []);
  const admin = useSelector(selectadmin);
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
      <Navbar posr={true} ></Navbar>
      <div className="home-container">
        {/* <MediaQuery maxWidth={700}>
        <MobileBanner></MobileBanner>
        </MediaQuery>
        <MediaQuery minWidth={701}>
        <Banner></Banner>
        </MediaQuery> */}
        <Banner></Banner>
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

