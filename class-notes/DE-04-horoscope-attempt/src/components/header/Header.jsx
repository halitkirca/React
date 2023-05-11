import React from 'react'
import "./Header.scss"
import img from "../../img/logo.png"

const Header = () => {
  return (
    <header className='sticky-top'>
      <div>
        <img src={img} width={"50px"} alt="" />
      </div>
      <div className='navigation'>
        <a href="">Horoscope</a>
        <a href="">Daily</a>
        <a href="">Tarot</a>
        <a href="">Article</a>
        <a href="">Contact</a>
      </div>
    </header>
  );
}

export default Header