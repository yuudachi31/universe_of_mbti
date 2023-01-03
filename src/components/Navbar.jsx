import { Link } from "react-router-dom";

const Navbar = ({posr,admin}) => {
  

  return (
  <>
  <div className={posr?"navbar posr":"navbar"}>
    <Link to="/">
    <img src="/images/nav_logo.png" className="navbar-logo"/>
    </Link>
    {
      admin?( <Link to={"/admin"}><div className="nav-management">
      管理模式
    </div></Link>):("")
    }
    
<div className="navLinks">
  {
    admin?(<div className="nav-manager-name">管理者1號</div>):(<><Link className="navBtn" to="/worldView">
    <div >世界觀</div>
    </Link>
    <Link className="navBtn" to="/articleList">
    <div >文章分析</div>
    </Link>
    <Link className="navBtn" to="/team">
    <div >團隊介紹</div>
    </Link></>)
  }



</div>
  </div>
  </>
  );
  
};

export default Navbar;
