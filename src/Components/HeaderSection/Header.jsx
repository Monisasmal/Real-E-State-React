import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';
// import { BiMenu } from "react-icons/bi";
// import { MdVideoCall } from "react-icons/md";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyled = (menuOpened) =>{
    if(document.documentElement.clientWidth <= 800){
      return{right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
      
      <div className="h-container flexCenter innerWidth">
        <img src="../asset/4Logo.png" alt="logo"></img>
        {/* <OutsideClickHandler onOutsideClick={()=>{
          setMenuOpened(false)
        }}> */}
        <div className="h-menu flexCenter " style={getMenuStyled(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="https://manaswini-portfolio.vercel.app/">Contact</a>
          </button>
        </div>
        {/* </OutsideClickHandler> */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}>
           <BiMenuAltRight size={30} />
        </div>
      </div>
      
    </section>
  );
};

export default Header;
