import React from 'react'
import './Skills.css'
import uidesign from '../../Assets/ui-design.png'
import webdesign from '../../Assets/website-design.png'
import appdesign from '../../Assets/app-design.png'
const Skills = () => {
  return (
    <section id='skills'>
        <span className='skilltitle'>What I do</span>
        <span className='skilldesc'>I am skilled and passionate web designer with experience in creating visually appealing and user-friendly<br/>websites.I have a strong understanding of design and a keen eye for detail.I am proficient in HTML,CSS, and Javascript,as well as design software such as Adobe Photoshop and illustrator.</span>
        <div className='skillbars'>
            <div className='skillbar'>
                <img src={uidesign} alt='uidesign' className='skillbarimg'/>
                <div className='skillbartest'>
                    <h2>UI/UX Design</h2>
                    <p>this is a demp text,you can write your own content here.</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={webdesign} alt='webdesign' className='skillbarimg'/>
                <div className='skillbartest'>
                    <h2>Website Design</h2>
                    <p>this demo text can be changed while making the production ready website</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={appdesign} alt='appdesign' className='skillbarimg'/>
                <div className='skillbartest'>
                    <h2>App Design</h2>
                    <p>you can write text related to mobile app development.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills