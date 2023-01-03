import { useDispatch, useSelector } from "react-redux";
import {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
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
  // { text: "爭議", link: "#5" },
];

const fourDimensionData = [
  {
    listTitle: "注意力方向（精力來源）",
    description: "主要是依據一個人發洩及獲得心靈能量的來源作為區分。",
    twoSide: [
      {
        image: "/images/Extroversion.png",
        twoSideTitle: "外向 E (Extrovert)",
        twoSideDescription:
          "熱衷人際交往，與人互動和社交聚會讓他們充滿能量且快樂。喜歡與人共處而非獨處，在外人面前精力充沛，獨處時會變得平淡或感到無聊。願意結識許多不同領域的朋友，喜歡跟群體一起完成工作，更願意與別人交談而非獨自思考。行動派，在想是否開始時已經付諸行動。傾向於說話時同時思考。自信且友善，但也有害羞和不擅長說話的外向者。",
      },
      {
        image: "/images/Introversion.png",
        twoSideTitle: "內向 I (Introvert)",
        twoSideDescription:
          "喜歡獨處或是需要自己的個人空間來恢復精神。偏好只有幾位深交的好友。喜歡獨立完成事情，並花很多時間坦索想法而不是直接行動。傾向先思考再說話，更喜歡思索、內省，並從中獲得能量。也有部分喜愛與人接觸、交往，談到有興趣或與自身相關的話題也會表現得很健談，但仍著重個人的私人空間。大多時間都活在自己的世界裡。",
      },
    ],
  },
  {
    listTitle: "認知方式（如何搜集信息）",
    description: "泛指人們認識世界、處理資訊的方法。",
    twoSide: [
      {
        image: "/images/Sensing.png",
        twoSideTitle: "實感 S (Sensing)",
        twoSideDescription:
          "喜歡著眼於當前的事物，習慣用五感來感受世界（五感為視覺、聽覺、嗅覺、味覺、觸覺）。偏好透過實務收集資料來理解現實狀況，相信個人經驗或感官感受多於抽象的想像。容易觀察細節，會隨時觀察身旁環境的變化。透過認清與收集事實，明白問題後才去解決。較踏實地，能忍耐，也較能容忍重複單一的工作。",
      },
      {
        image: "/images/Intuition.png",
        twoSideTitle: "直覺 N (Intuition)",
        twoSideDescription:
          "著眼於未來，著重可能性及預感，從潛意識及事物間的關聯來理解世界。憑藉的多是個人的猜測或預想，未必是事實的判斷，心理學家指出，直覺也許來自於個人的經歷等，直覺型的人內化成了一種感覺而變成了預感。對於抽象的概念、符號較能夠理解其中意義與概念。喜歡較有新鮮感的事，並發想靈感和可能性去解決問題。偏好想像事物的多種可能性，不太考慮令其成真的可能性。",
      },
    ],
  },
  {
    listTitle: "判斷方式（如何做決定）",
    description:
      "情感及思考是下決定時內心掙扎所側重的方向，並配合以上的能量走向。",
    twoSide: [
      {
        image: "/images/Thinking.png",
        twoSideTitle: "思考 T (Thinking)",
        twoSideDescription:
          "比起他人感受，更重視於事情的邏輯，通常較為客觀，會理性的分析得出結果和決定。由於決策時情感上的考量較低，工作上不會感情用事或是表現出情緒與喜好。",
      },
      {
        image: "/images/Feeling.png",
        twoSideTitle: "情感 F (Feeling)",
        twoSideDescription:
          "比起事情的邏輯與正確性，更重視個人和他人的感受與價值觀，也因此容易受環境而影響。較關注人際關係而非客觀事物，在團隊裡較喜歡調解和維持和諧的人。",
      },
    ],
  },
  {
    listTitle: "認知態度（如何應對外部世界） ",
    description: "人格的世界觀及生活模式，建構與外在世界和為人處世的方法。",
    twoSide: [
      {
        image: "/images/Judging.png",
        twoSideTitle: "判斷 J (Judging)",
        twoSideDescription:
          "傾向以結構化的方式認識世界，有組織與計畫的安排生活，選擇上較為決斷。對於未來較有安排與想法，在工作上善於觀察與制定規則，並按部就班的達成目標。",
      },
      {
        image: "/images/Perceiving.png",
        twoSideTitle: "感知 P (Perceiving)",
        twoSideDescription:
          "傾向於非結構化的認識世界，心思開放，對於選擇和、目標和生活等給予許多彈性。隨遇而安，對事情的態度也較為靈活，同時也容易優柔寡斷。",
      },
    ],
  },
];
const ElevatorCont = styled.div`
  width: 180px;
  margin-bottom: 60px;
`;
const ElevatorLink = styled.a`
  font-family: "ヒラギノ角ゴ ProN W8";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  width: fit-content;

  /* text-decoration: ${(props) => (props.active ? "underline" : "none")}; */
  border-bottom: ${(props) => (props.active ? "3px solid #000" : "none")};
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
      <Navbar posr={true}></Navbar>
      <div className="worldView-outSet">
        <div className="worldView-cont">
          <Elevator
            sectionRef_1={sectionRef_1}
            sectionRef_2={sectionRef_2}
            sectionRef_3={sectionRef_3}
            sectionRef_4={sectionRef_4}
          ></Elevator>
          <div className="worldView-content-outSet">
            <div className="worldView-content-cont">
              <WorldIntroduce ref={sectionRef_1}></WorldIntroduce>
              <WhatIsMBTI ref={sectionRef_2}></WhatIsMBTI>
              <FourDimensions ref={sectionRef_3}></FourDimensions>
              <Cognition ref={sectionRef_4}></Cognition>
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
  const { sectionRef_1, sectionRef_2, sectionRef_3, sectionRef_4 } = props;
  const scrollToBlock = (index) => {
    console.log(index);
    let element;
    // switch (index) {
    //   case 0:
    //     element = sectionRef_1.current.getRef().current;
    //   case 1:
    //     element = sectionRef_2.current.getRef().current;
    //   case 2:
    //     element = sectionRef_3.current.getRef().current;
    //   case 3:
    //     element = sectionRef_4.current.getRef().current;
    // }
    if (index === 0) {
      element = sectionRef_1.current.getRef().current;
    } else if (index === 1) {
      element = sectionRef_2.current.getRef().current;
    } else if (index === 2) {
      element = sectionRef_3.current.getRef().current;
    } else if (index === 3) {
      element = sectionRef_4.current.getRef().current;
    }
    if (!element) return;
    console.log(element);

    let { top } = cumulativeOffset(element);
    // console.log(top)
    window.scrollTo({
      top: top - 50,
      behavior: "smooth",
    });
  };
  function windowscroll() {
    // console.log(window.scrollY)
    // console.log(cumulativeOffset(ProductRefs.current.getRef1().current[0].getRef().current).top)
    if (
      window.scrollY <
      cumulativeOffset(sectionRef_1.current.getRef().current).top
    ) {
      setcurrentElevator(0);
    } else if (
      window.scrollY <
      cumulativeOffset(sectionRef_2.current.getRef().current).top
    ) {
      setcurrentElevator(1);
    } else if (
      window.scrollY <
      cumulativeOffset(sectionRef_3.current.getRef().current).top
    ) {
      setcurrentElevator(2);
    } else if (
      window.scrollY <
      cumulativeOffset(sectionRef_4.current.getRef().current).top
    ) {
      setcurrentElevator(3);
    }

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
      {elevatorArray.map((item, index) => (
        <>
          <ElevatorCont
            onClick={() => {
              scrollToBlock(index);
            }}
          >
            <ElevatorLink id={index} active={currentElevator === index}>
              {item.text}
            </ElevatorLink>
          </ElevatorCont>
        </>
      ))}
    </div>
  );
};

const WorldIntroduce = forwardRef((props, ref) => {
  const IntroRef = useRef();
  useImperativeHandle(
    ref,
    () => ({
      getRef: () => {
        return IntroRef;
      },
    }),
    []
  );
  return (
    <>
      <div className="worldView-title" ref={IntroRef}>
        世界觀介紹
      </div>
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
  );
});
const WhatIsMBTI = forwardRef((props, ref) => {
  const returnRef = useRef();
  useImperativeHandle(
    ref,
    () => ({
      getRef: () => {
        return returnRef;
      },
    }),
    []
  );
  return (
    <>
      <div className="worldView-title  mt100 mb30" ref={returnRef}>
        MBTI是什麼？
      </div>
      <div className="worldViewArticle">
        MBTI 中文全名為邁爾斯-布里格斯性格分類指標（Myers-Briggs Type
        Indicator），是一種人格類型學的分類模式，為美國作家Katharine Cook Briggs
        和女兒 Isabel Briggs Myers 因對心理學的愛好，以心理學家榮格在 1921
        年的《心理類型》為基礎，深入研究後提出。
      </div>
      <div className="worldViewArticle mb50">
        自1998年之後的版本學界普遍認為MBTI具備足夠的信度與效度。在逐漸被心理學界認可後，運用在職場、教育等領域的人員評估。
      </div>
      <div className="worldView-subtitle mb30">理論基礎</div>
      <div className="worldViewArticle mb50">
        性格分類源自卡爾·榮格的主觀觀察，而非控制實驗。榮格認為人的意識具有四種功能，各有兩個極端。兩種非理性功能，為知覺和直覺；兩種理性功能，為思維和情感；意識的四種功能又受到兩種態度，外向性與內向性的影響。MBTI評量就是依此理論為基礎所發展出來的。
      </div>
      <div className="worldView-subtitle mb30">MBTI的爆紅</div>
      <div className="worldViewArticle mb100">
        因為MBTI的爆紅，網路上已經有許多免費網站可以測驗，其中最受歡迎的是來自英國的公司
        NERIS Analytics Limited 架設的平台：
        <a href="https://www.16personalities.com/free-personality-test">
          16Personalities
        </a>{" "}
        ，將人格們賦予角色名稱和各種形象圖，讓使用者們更感覺有趣。
      </div>
      <div className="WV-bottom-line"></div>
    </>
  );
});

const FourDimensions = forwardRef((props, ref) => {
  const returnRef = useRef();
  useImperativeHandle(
    ref,
    () => ({
      getRef: () => {
        return returnRef;
      },
    }),
    []
  );
  return (
    <>
      <div className="worldView-title mt100" ref={returnRef}>
        四大維度介紹
      </div>
      <Image className="WV_img1 mb50" src="/images/WV_img3.png"></Image>
      <div className="worldViewArticle ">
        MBTI
        人格有四個維度，就是人格所代表的四個英文字母。通過了解人們在做事、獲取信息、決策等方面的偏好，從四個角度對人定義出功能並進行分析。
      </div>
      <div className="worldViewArticle">
        一個健全的人會使用全部的功能，並不是你測出來是
        E（外向），你就一定不會運用或有
        I（內向）的特質，會因為情境和狀態選擇這八項功能做搭配使用，而使用的頻率和優勢變成你的代表人格。
      </div>
      <div className="worldViewArticle">
        每個維度有兩個方向，總共是八個功能，分別是：
      </div>
      {fourDimensionData.map((item) => (
        <EachDimensionSection
          id={item.listTitle}
          item={item}
        ></EachDimensionSection>
      ))}
    </>
  );
});

const EachDimensionSection = ({ item }) => {
  //   const item = fourDimensionData[0];
  return (
    <>
      <div className="each-dimension-title mt50">{item.listTitle}</div>
      <div className="each-dimension-description">{item.description}</div>
      <div className="mt30 mb50">
        <div className="eachSide-cont">
          <Image className="mr45" src={item.twoSide[0].image}></Image>
          <div className="">
            <div className="each-dimension-description">
              {item.twoSide[0].twoSideTitle}
            </div>
            <div className="each-dimension-description mt15">
              {item.twoSide[0].twoSideDescription}
            </div>
          </div>
        </div>
        <div className="eachSide-cont mt50">
          <Image className="mr45" src={item.twoSide[1].image}></Image>
          <div className="">
            <div className="each-dimension-description">
              {item.twoSide[1].twoSideTitle}
            </div>
            <div className="each-dimension-description mt15">
              {item.twoSide[1].twoSideDescription}
            </div>
          </div>
        </div>
      </div>
      <div className="WV-bottom-line"></div>
    </>
  );
};

const Cognition = forwardRef((props, ref) => {
  const returnRef = useRef();
  useImperativeHandle(
    ref,
    () => ({
      getRef: () => {
        return returnRef;
      },
    }),
    []
  );
  return (
    <div ref={returnRef}>
      <div className="worldView-title mt100">認知功能介紹</div>
      <div className="worldViewArticle mt30">
        MBTI 中文全名為邁爾斯-布里格斯性格分類指標（Myers-Briggs Type
        Indicator），是一種人格類型學的分類模式，為美國作家Katharine Cook Briggs
        和女兒 Isabel Briggs Myers 因對心理學的愛好，以心理學家榮格在 1921
        年的《心理類型》為基礎，深入研究後提出。
      </div>
      <div className="h800"></div>
    </div>
  );
});
export default WorldView;
