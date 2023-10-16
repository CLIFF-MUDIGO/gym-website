import React from 'react'
import aboutimage from '../images/about.png';

const About = () => {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt='' />
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum quam commodi dignissimos, esse quas, nam ipsam suscipit dolore repellat aut magni illo voluptatum veniam.</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About