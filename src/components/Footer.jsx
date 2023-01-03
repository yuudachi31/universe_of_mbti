import { Link } from "react-router-dom";

const Footer = ({ item }) => {
  // console.log(item);

  return (
    <div className="footer-cont">
        <div className="w250-cont"></div>
      <img src="/images/footerImg.png"/>
      <div className="w250-cont">
      <img className="footer-icon" src="/images/youtube.png"/>
      <img className="footer-icon" src="/images/fb.png"/>
      <img className="footer-icon" src="/images/mbti.png"/>

      </div>
      
    </div>
  );
};

export default Footer;
