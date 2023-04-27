import { useEffect, useState } from 'react'
import {
  faPython,
  faAws,
  faGitAlt,
  faHtml5,
  faReact,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className='largertext'>
          Experienced engineer with a diverse background in both chemical and hardware engineering. 
          Passionate about technology and constantly seeking new challenges in the field of software engineering.
          </p>
          <p align="LEFT" className='largertext'>
            In the midst of completing a post-baccalaureate program in computer science to expand 
            my skill set and transition into the tech industry. As a former process and quality
             engineer, I bring a unique perspective and problem-solving approach to software development.
              My experience in process optimization, quality control, and project management has taught 
              me the importance of efficient, effective, and reliable systems.
          </p>
          <p className='largertext'>
          Excited to use my technical and analytical skills to contribute to innovative 
          software projects and take on new challenges in a fast-paced, dynamic environment.
           Connect with me to learn more about my background and aspirations in engineering.

          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={require('../../assets/images/logo4.png')} class="pythonlogo" alt="Python logo" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAws} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="green" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
