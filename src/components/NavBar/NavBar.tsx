import "./NavBar.css";
import iglogo from "../../assets/iglogo.webp"

const NavBar = () => {
  return (
    <div className="container">
      <img src={iglogo}></img>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item">PHOTOGRAPHY &#x25BC;</div>
      <div className="item">CONTACT</div>
    </div>
  );
};

export default NavBar;
