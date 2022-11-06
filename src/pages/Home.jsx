import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Selectadmin, articleEditing } from "../redux/adminSlice";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import homeData from "../json/home.json";
import Banner from "../components/Banner";
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
      <Navbar posr={true} ></Navbar>
      <div className="home-container">
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

