import React from 'react'
import './Intro.css'
import bg from '../../Assets/image.png'
import {Link} from 'react-scroll';
import btnimg from '../../Assets/hireme.png'
const Intro = () => {
  return (
   <section id='intro'>
        <div className='introcontent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I'm <span className='introname'>Smith</span><br/>Website Designer</span>
            <p className='intropara'>i am a skiller web designer and have a good command on frontend development. <br/> wish to collaborate in future to expand my knowledge.</p>
            <Link><button className='btn'><img src={btnimg} alt="" className='btnimg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
   </section>
  )
}

export default Intro