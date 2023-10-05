import {useState} from 'react';

//Styles
import '../Style/projects.scss'

import Card from './Card/Card';


export default function Projects() {

    return(
        <div className="Projects" id="projects">
            <h2>Projects</h2>

            <div className="ProjectGrid">
                <Card />
                <Card />
            </div>
        </div>
    )
} 