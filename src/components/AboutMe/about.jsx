import { Link } from 'react-router-dom';
import classes from './about.module.css';
import Footer from '../Footer/Footer';

import {TfiEmail} from 'react-icons/tfi';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

const About = () => {
    return <><div className={classes.about}>
        <span className={classes.heading}>About Me</span>
        <p>
            I am a MERN Stack Developer located in AndhraPradesh, India.
            I have a serious passion in creating a new UI with dynamic user experience using ReactJS, NodeJS 
            and learning a new thing from every project that I am going to be in.
        </p>
        <p>
            I am very enthusiastic in learning and working with the latest and continuously evolving technologies.
            I would love to solve the challenging problems, and will feel like learning a new thing from them.
        </p>
        <p>
            I am intrested in creating the websites with new funtionalities and working on ambiguous projects with positive people.
            Here are some of my projects, Take a look at them and make sure to give a review of my projects: <Link to='/projects'>My Projects</Link>
        </p>
        <p>
            I would like to spend my free time in beach with friends. My Hobbies are Watching Movies, Collecting Pens. I like to Cook, Code and Make a new recipe out of it.
        </p>
        <p>
            To reach me out or To give a review about My Portfolio, You can send me quick mail here: <Link to='/contact-me'>Contact Me!</Link>
        </p>
    </div>
    </>
};

export default About;