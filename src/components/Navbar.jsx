import { Link } from "react-router-dom";

const Navbar = () => {
  

  return (
  <>
  <div className="navbar">
    <Link to="/">
    <img src="/images/nav_logo.png" className="navbar-logo"/>
    </Link>
<div className="navLinks">
<Link className="navBtn" to="/worldView">
    <div >世界觀</div>
    </Link>
    <Link className="navBtn" to="/articleList">
    <div >文章分析</div>
    </Link>
    <Link className="navBtn" to="/team">
    <div >團隊介紹</div>
    </Link>


</div>
  </div>
  </>
  );
  
};

export default Navbar;
