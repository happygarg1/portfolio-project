import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import contactimg from '../../Assets/contact.png'
import {Link} from 'react-scroll';
import menu from '../../Assets/menu.png'
const Navbar = () => {
  const [showmenu,setshowmenu]=useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopmenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>Home </Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='desktopmenulistitem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className='desktopmenulistitem'>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className='desktopmenulistitem'>Clients</Link>
        </div>
        <button className='desktopmenubtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactimg} alt='' className='desktopmenuimg'/>
            Contact Me
        </button>

        <img src={menu} alt='menu' className='mobmenu' onClick={()=>setshowmenu(!showmenu)}/>
        <div className='navmenu' style={{display:showmenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='listitem'>Home </Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500}  className='listitem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500}   className='listitem'>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className='listitem'>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='listitem'>Contact</Link>
        </div>
    </nav>
  )}
export default Navbar