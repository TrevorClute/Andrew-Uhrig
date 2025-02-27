import "./NavBar.css";
import { useState } from "react";
import PhotoDropDown from "./PhotoDropDown/PhotoDropDown";

const NavBar = () => {
  const [isPhotoDropDownOpen, setIsPhotoDropDownOpen] = useState(false);
  return (
    <>
      <div className="container">
        <div className="item"></div>
        <div className="item"></div>
        <div
          className="item"
          onClick={() => {
            console.log(isPhotoDropDownOpen)
            setIsPhotoDropDownOpen((prev) => !prev);
          }}
        >
          PHOTOGRAPHY &#x25BC;
        </div>
        <div className="item">CONTACT</div>
      </div>
      {isPhotoDropDownOpen ? <PhotoDropDown /> : <></>}
    </>
  );
};

export default NavBar;
