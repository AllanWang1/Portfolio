import React, { useState } from 'react'
import './Navbar.css'
import underline from "../../assets/nav_underline.svg"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
      <ul className="nav-menu">
        <li>
          <AnchorLink className='anchor-link' href='#home'>
          <p onClick={()=>setMenu("home")}>Home</p>
          </AnchorLink>{menu==="home" ? <img src={ underline } alt=""/> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
          <p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>
          {menu==="about" ? <img src={ underline } alt=""/> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#experiences'>
          <p onClick={()=>setMenu("experiences")}>Experiences</p>
          </AnchorLink>{menu==="experiences" ? <img src={ underline } alt=""/> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#projects'>
          <p onClick={()=>setMenu("projects")}>Projects</p>
          </AnchorLink>{menu==="projects" ? <img src={ underline } alt=""/> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
          <p onClick={()=>setMenu("more")}>More About Me</p>
          </AnchorLink>{menu==="more" ? <img src={ underline } alt=""/> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
          <p onClick={()=>setMenu("contact")}>Contact</p>
          </AnchorLink>{menu==="contact" ? <img src={ underline } alt=""/> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <a href="https://www.linkedin.com/in/ziwei-wang-b489a3222/" target="_blank">
          Connect with me
        </a>
      </div>
    </div>
  )
}

export default Navbar
