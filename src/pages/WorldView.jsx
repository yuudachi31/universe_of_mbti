import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
// import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import articleJson from "../json/articleList.json";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Image from "rc-image";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const elevatorArray = [
  { text: "世界觀介紹", link: "#1" },
  { text: "MBTI是什麼?", link: "#2" },
  { text: "四大維度介紹", link: "#3" },
  { text: "認知功能介紹", link: "#4" },
  { text: "爭議", link: "#5" },
];

const ElevatorLink = styled.a`
  font-family: "ヒラギノ角ゴ ProN W8";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  width: 180px;
  margin-bottom: 60px;
`;
function cumulativeOffset(element) {
  if (!element) {
    return undefined;
  }

  var top = 0,
    left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return { top: top, left: left };
}

const WorldView = () => {
  const sectionRef_1 = useRef();
  const sectionRef_2 = useRef();
  const sectionRef_3 = useRef();
  const sectionRef_4 = useRef();
  const sectionRef_5 = useRef();

  return (
    <>
      <Navbar></Navbar>
      <div className="worldView-outSet">
        <div className="worldView-cont">
          <Elevator sectionRef_1={sectionRef_1}></Elevator>
          <div className="worldView-content-outSet">
          <div className="worldView-content-cont">
            <WorldIntroduce></WorldIntroduce>
            <WhatIsMBTI></WhatIsMBTI>
          </div>
          </div>

        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
const Elevator = (props) => {
  const [currentElevator, setcurrentElevator] = useState(null);
  const { sectionRef_1 } = props;
  function windowscroll() {
    // console.log(window.scrollY)
    // console.log(cumulativeOffset(ProductRefs.current.getRef1().current[0].getRef().current).top)
    if (
      window.scrollY <
      cumulativeOffset(
        sectionRef_1.current.getRef1().current[0].getRef().current
      ).top -
        100
    )
      setcurrentElevator(null);
    // else if (
    //     window.scrollY <
    //     cumulativeOffset(ProductRefs.current.getRef1().current[0].getRef().current).top + 300
    // )
    //     setcurrentElevator(0);
    // else if (
    //     window.scrollY <
    //     cumulativeOffset(ProductRefs.current.getRef1().current[1].getRef().current).top + 300
    // )
    //     setcurrentElevator(1);
  }
  useEffect(() => {
    window.addEventListener("scroll", windowscroll);
    // windowscroll();
    return () => {
      window.removeEventListener("scroll", windowscroll);
    };
  });

  return (
    <div className="worldView-elevator-cont">
      {elevatorArray.map((item) => (
        <>
          <ElevatorLink>{item.text}</ElevatorLink>
        </>
      ))}
    </div>
  );
};

const WorldIntroduce =()=>{
     
    return(
<>
<div className="worldViewTitle">世界觀介紹</div>
<Image className="WV_img1" src="/images/WV_img1.png"></Image>
<div className="worldViewArticle mt50">
一個誕生於宇宙，沒有姓名，不知道自己是誰的生物，“0號“，探索宇宙的過程，遇見了不同個性的心智怪獸們，最終融合並誕生成獨一無二的自己。
</div>
<div className="worldViewArticle ">
0號身上的圖案有四個顏色，代表分類人格的四個氣質。心智小怪獸是將MBTI的心智功能們擬人化，0號與小怪獸們的融合，象徵活在世界上探索自我的大家，最終找到自己的過程。
</div>
<div className="worldViewArticle mb50">
每個人格身上也都有小怪獸的特徵，搭配分類的顏色組合而成。
</div>
<Image className="WV_img1 mb100" src="/images/WV_img2.png"></Image>
<div className="WV-bottom-line"></div>
</>
     )
}
const WhatIsMBTI =()=>{
    return(
<>
<div className="worldView-title  mt100 mb30">MBTI是什麼？</div>
<div className="worldViewArticle">
MBTI 中文全名為邁爾斯-布里格斯性格分類指標（Myers-Briggs Type Indicator），是一種人格類型學的分類模式，為美國作家Katharine Cook Briggs 和女兒 Isabel Briggs Myers 因對心理學的愛好，以心理學家榮格在 1921 年的《心理類型》為基礎，深入研究後提出。
</div>
<div className="worldViewArticle mb50">
自1998年之後的版本學界普遍認為MBTI具備足夠的信度與效度。在逐漸被心理學界認可後，運用在職場、教育等領域的人員評估。
</div>
<div className="worldView-subtitle mb30">
理論基礎
</div>
<div className="worldViewArticle mb50">
性格分類源自卡爾·榮格的主觀觀察，而非控制實驗。榮格認為人的意識具有四種功能，各有兩個極端。兩種非理性功能，為知覺和直覺；兩種理性功能，為思維和情感；意識的四種功能又受到兩種態度，外向性與內向性的影響。MBTI評量就是依此理論為基礎所發展出來的。
</div>
<div className="worldView-subtitle mb30">
MBTI的爆紅
</div>
<div className="worldViewArticle mb100">
因為MBTI的爆紅，網路上已經有許多免費網站可以測驗，其中最受歡迎的是來自英國的公司 NERIS Analytics Limited 架設的平台：16Personalities ，將人格們賦予角色名稱和各種形象圖，讓使用者們更感覺有趣。
</div>
<div className="WV-bottom-line"></div>
</>
    )
}




export default WorldView;
