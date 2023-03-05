import React, { useState } from 'react';
import hamburger from '../../images/hamburger.png'
import close from '../../images/close.png'
// import Link from 'react-scroll';
import './style.css'

const Navbar = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const toggleHandler = ()=>{
        setIsButtonClicked(!isButtonClicked)
    }
  return (
    <>
      <nav>
        <h2>Abdul Rehman</h2>
        <div className='links'>
            <ul id='navbar' className={isButtonClicked?"show":"hide"}>
                <li><a href="#home"><span>01.</span> Home</a></li>
                <li><a href="#about"><span>02.</span> About</a></li>
                <li><a href="#skills"><span>03.</span> Skills</a></li>
                <li><a href="#project"><span>04.</span> Projects</a></li>
                <li><a href="#contact"><span>05.</span> Contact</a></li>
            </ul>
        </div>
        <div id='mobile'>
            <img src={isButtonClicked?close:hamburger} alt="" onClick={toggleHandler}/>
        </div>
      </nav>
    </>
  )
}

export default Navbar
