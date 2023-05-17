import { useState, useEffect } from 'react';

import '../Style/navbar.scss';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

    const [bgActive, setBgActive] = useState(false);

    //Handles adding background on user scroll
    const changeBG = () => {
        if(window.scrollY >= 60) {
            setBgActive(true)
        } else {
            setBgActive(false);
        }
    }

    useEffect(() => {
        changeBG();
        window.addEventListener('scroll', changeBG);
    })

    return (
        <div className={bgActive ? 'Navbar Active' : 'Navbar'}>
            <div>
                <ul>
                    <li>
                        <a href={'/#about'}>About</a>
                    </li>
                    <li>
                        <a href={'/#skills'}>Skills</a>
                    </li>
                    <li>
                        <a href={'/#projects'}>Projects</a>
                    </li>
                    <li>
                        <a href={"/#contact"}>Contact</a>
                    </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>
                        <a href="https://github.com/caw1517" target='_blank' rel='noreferrer' >
                            <FontAwesomeIcon className='icon' icon={faGithubSquare} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/canaan-white-2b886319a/" target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon className='icon' icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="#1">
                            <FontAwesomeIcon className='icon' icon={faPaperclip} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}