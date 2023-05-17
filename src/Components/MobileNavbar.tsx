//React
import { useState } from 'react'

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faPaperclip, faX } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function MobileNavbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    //Toggle to opposite of the navbar
    function toggleNav() {
        setShowNavbar(!showNavbar);
    }

    return (
        <>

            <div className="MobileNav">
                {showNavbar ? 
                    <FontAwesomeIcon icon={faX} onClick={toggleNav} className='MobileIcon'/>
                    : 
                    <FontAwesomeIcon icon={faBars} onClick={toggleNav} className='MobileIcon' />
                }

                <div>
                    <ul>
                        <li>
                            <a href="#3">
                                <FontAwesomeIcon className='MobileIcon' icon={faGithubSquare} />
                            </a>
                        </li>
                        <li>
                            <a href="#2">
                                <FontAwesomeIcon className='MobileIcon' icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="#1">
                                <FontAwesomeIcon className='MobileIcon' icon={faPaperclip} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {showNavbar ?
                <div className="MobileNavMenu">
                <ul>
                    <li>
                        <a href={'/#about'} onClick={toggleNav}>About</a>
                    </li>
                    <li>
                        <a href={'/#skills'} onClick={toggleNav}>Skills</a>
                    </li>
                    <li>
                        <a href={'/#projects'} onClick={toggleNav}>Projects</a>
                    </li>
                    <li>
                        <a href={"/#contact"} onClick={toggleNav}>Contact</a>
                    </li>
                </ul>
            </div>
            : null}

            

            {showNavbar ? <div className='overlay' onClick={toggleNav} /> : null} 

        </>
    )
}