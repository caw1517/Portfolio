import '../../Style/projects.scss'

import { useState } from 'react'


//Font Awesome
import { faReact, faPython, faSass, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//Images
import ft from '../../assets/ft.png'

export default function Card() {

    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlipped = () => {
        setIsFlipped(!isFlipped);
    }

    return(
        <div className={`Card ${isFlipped ? "flipped" : ""}`} onClick={toggleFlipped}>
            <div className="CardFront">
                <h3>Flying Together</h3>
                <div className="CardLanguages">
                    <FontAwesomeIcon icon={faPython} className="Icon"/>
                    <FontAwesomeIcon icon={faReact} className="Icon"/>
                    <FontAwesomeIcon icon={faSass} className="Icon"/>
                </div>
                <img src={ft} alt="Flying Together" />
            </div>
            <div className="CardBack">
                <h3>Flying Together</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic non recusandae temporibus architecto nesciunt saepe corporis minima dignissimos illo facere!</p>
                <div className="BackIcons">
                    <div className="IconBlock">
                        <p>View App</p>
                        <a href="#">
                            <FontAwesomeIcon icon={faSearch} className='Icon'/>
                        </a>
                    </div>
                    
                    <div className='IconBlock'>
                        <p>View Code</p>
                        <a href="#">
                            <FontAwesomeIcon icon={faGithub} className='Icon' />
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}