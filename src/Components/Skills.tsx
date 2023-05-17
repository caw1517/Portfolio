//Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Style/skills.scss'

import { faJava, faReact, faHtml5, faCss3, faSass, faBootstrap, faJsSquare, faPython } from '@fortawesome/free-brands-svg-icons'

export default function Skills() {
    return (
        <div className="Skills" id='skills'>
            <h2>Skills & Experience</h2>
            <p>As a prior aircraft mechanic at a major airline, I have a large variety of experience
                in troubleshooting complex problems to find the most practical solution. As a developer
                I have experience in developing in a vast variety of languages and frameworks to 
                make both full stack and front end applications.
            </p>
            <div className="SkillIcons">
                <FontAwesomeIcon icon={faHtml5} className='Icon' />
                <FontAwesomeIcon icon={faCss3} className='Icon' />
                <FontAwesomeIcon icon={faReact} className='Icon' />
                <FontAwesomeIcon icon={faJsSquare} className='Icon' />
                <FontAwesomeIcon icon={faSass} className='Icon' />
                <FontAwesomeIcon icon={faBootstrap} className='Icon' />
                <FontAwesomeIcon icon={faJava} className='Icon' />
                <FontAwesomeIcon icon={faPython} className='Icon' />
            </div>

            <a href="/resume">View My Resume</a>
        </div>
    )
}