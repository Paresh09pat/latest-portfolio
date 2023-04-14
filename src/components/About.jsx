import React from 'react'
import './Comp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsPraying, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import myimage from './Image/newimg.jpg'
function About() {
  return (
    <>
      <div className='maindiv'>

        <div className='photo'>
          <img className='image' src={myimage} />
        </div>

        <div className='aboutme'>

          <h1> <FontAwesomeIcon className='icons' icon={faHandsPraying} bounce size="xl" /> Hello Everyone <FontAwesomeIcon className='icons' icon={faHandsPraying} bounce size="xl" /></h1>

          <p className='aboutmetext'>
            My name is Paresh Balu Patil and I was completed my Bachelor from Indira College of Engineering & Management, Pune and my specialization is in Mechanical Engineering.
            But I have more intrest in coding thats why I shift my carrier towards IT industry.
            I have a deep interest in Web Development and especially in frontend development and I have made some full stack projects using <b>Html , Css , Javascript , React , Node js , Express js & MongoDB</b>.
            And to use my web development skills I have participated in many hackathons.
            My strengths are my self-confidence and my willingness to improve myself. My hobbies are listening to music and various podcasts and cooking. <br/><br/>
            Currently I am looking to join a tech company where I can learn from others as well as apply the knowledge which I have learned in my life.
          </p>

          <div className='myresume'>
            <a target='_blank' className='resumelink' href='https://drive.google.com/file/d/1A2AdDg8-kfRfdeNDXEr7TKbVrYlTlUBd/view?usp=share_link'>
              <FontAwesomeIcon className='resumeicon' icon={faCloudArrowUp} />
              <span className='resumetext'>My Resume</span>
            </a>
          </div>

        </div>

      </div>

    </>
  )
}

export default About