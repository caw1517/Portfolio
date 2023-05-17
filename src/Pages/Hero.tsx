import '../Style/hero.scss'
import {ReactComponent as DevPhoto} from '../assets/Dev.svg'

export default function Hero()
{
    return(
        <div className="hero" id="about">
            <div className="AboutInfo">
                <h2>Full Stack Developer</h2>
                <h1>CANAAN WHITE</h1>
                <p>Passionate developer driven by a desire to create 
                    practical solutions to complex problems. Specializing
                    in developing robust applications and responsive user 
                    interfaces that meet the needs of today's digital landscape.
                </p>

                <a href="/#contact">Get In Touch</a>
            </div>

            <DevPhoto className='svg' />
        </div>
    )
}