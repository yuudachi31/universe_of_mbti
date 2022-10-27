import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import personalityJson from "../json/personality.json";
import { Link } from "react-router-dom";
import styled from "styled-components";



// import {} from "../redux/adminSlice"
const SubTitle = styled.div`
    color: ${(props) => props.mainColor};
    font-family: 'Hiragino Kaku Gothic Std';
font-style: normal;
font-weight: 800;
font-size: 36px;
/* line-height: 54px; */


letter-spacing: 0.05em;
`


const PersonalityView = () => {
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
                    <div className="personality-top-type">
                    {type}
                </div>
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
              <img className="personality-top-image" src="/images/Personality_BG.png" />
              <img className="personality-top-image personality-top-character" src={"/images/"+type+".png"}/>
            </div>
          </div>
          <div className="letterMeans">
            <div className="personality-section-title">
            字母意思
            </div>
            <div className="letterMeans-content">
                {typeObj.LetterMeans.map((item)=>{
                    return(
                        <>
                        <MeansCard item={item}/>
                        </>
                    )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MeansCard = ({item})=>{

    return(
        <div className="meansCard-cont">
        
        {item.chinese}
            </div>
    )
  
}
export default PersonalityView;
