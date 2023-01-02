import '../banner.css';
import '../App.css';
import { Link } from "react-router-dom";

const Banner = () => {

  return (
    <div className="Banner">
      <div className="intro">
        <div className="item typo"></div>
        
        <div className="item content">
        透過MBTI來認識<br></br>誕生於宇宙中<br></br>獨一無二的自己
        </div>
        <div className="item button">
        <Link to={"/worldView"} className="b_text">
          世界觀 GO!
        </Link>
        </div>

      </div>

      <div className="cover">
      </div>
    </div>
  );
};

export default Banner;
