import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import personalityJson from "../json/personality.json";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import {} from "../redux/adminSlice"
const SubTitle = styled.div`
  color: ${(props) => props.mainColor};
  font-family: "Hiragino Kaku Gothic Std";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  /* line-height: 54px; */
  margin-top: 5px;
  letter-spacing: 0.05em;
`;
const CognitionItemTitle = styled.div`
  /* color: ${(props) => props.mainColor}; */
  font-family: "Hiragino Kaku Gothic ProN";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  /* line-height: 0%; */
  ::before {
    content: " ";
    display: inline-block;
    background-color: ${(props) => props.mainColor};
    width: 30px;
    height: 30px;
    margin-right: 25px;
    margin-top: 35px;
  }
`;

const PersonalityView = () => {
  useEffect(() => {
    window.scrollTo({top: 0})
  }, []);
  const { type } = useParams();
  const typeObj = personalityJson.find((x) => x.typeLetter === type);
  console.log(typeObj);
  return (
    <>
      <Navbar></Navbar>
      <div className="big-container">
        <div className="personality-container">
          <div className="personality-top">
            <div className="personality-top-left">
              <div className="personality-top-text">
                <div className="personality-top-title">
                  <div className="personality-top-type">{type}</div>
                  <div className="personality-top-type-chin">
                    {typeObj.typeChinese}
                  </div>
                </div>
                <SubTitle mainColor={typeObj.mainColor}>
                  {typeObj.subTitle}
                </SubTitle>
                {/* <div className="personality-top-subtitle">
                
                </div> */}
                <div className="personality-top-content">
                  <div
                    dangerouslySetInnerHTML={{ __html: typeObj.content }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="personality-top-right">
              <img
                className="personality-top-image pbg"
                src="/images/Personality_BG.png"
              />
              <img
                className="personality-top-image personality-top-character"
                src={"/images/" + type + "_light.png"}
              />
            </div>
          </div>
          <div className="letterMeans">
            <div className="personality-section-title">字母意思</div>
            <div className="letterMeans-content">
              {typeObj.LetterMeans.map((item) => {
                return (
                  <>
                    <MeansCard item={item} />
                  </>
                );
              })}
            </div>
          </div>
          <div className="cognitive">
            <div className="personality-section-title">認知功能</div>

            {typeObj.cognition.map((item) => {
              return (
                <>
                  <CognitionItemTitle mainColor={typeObj.mainColor}>
                    {item.title}
                  </CognitionItemTitle>

                  <div className="cognition-item-text">{item.content}</div>
                </>
              );
            })}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

const MeansCard = ({ item }) => {
  return (
    <div className="meansCard-cont">
      <div className="meansCard-img">
        <img src={item.ImageUrl+".png"} />
      </div>
      <div className="meansCard-chinese">{item.chinese}</div>
      <div className="meansCard-english">{item.english}</div>
    </div>
  );
};
export default PersonalityView;
