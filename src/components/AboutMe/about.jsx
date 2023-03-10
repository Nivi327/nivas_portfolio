import { Link } from 'react-router-dom';
import classes from './about.module.css';

const About = () => {
    return <div className={classes.about}>
        <span className={classes.heading}>Me, Myself & I</span>
        <p>
            I am a MERN Stack Developer located in AndhraPradesh, India.
            I have a serious passion in creating a new UI with dynamic user experience using ReactJS, NodeJS 
            and learning a new thing from every project that I am going to be in.
        </p>
        <p>
            I would love to solve the challenging problems. I am a well-Organised person.
            I would always love to spend my time in the beach.
        </p>
        <p>
            I am intrested in creating the websites with new funtionalities and working on ambiguous projects with positive people.
        </p>
        <p>
            Click on the projects links to view my projects <Link to='/projects'>My Projects</Link>
        </p>
        <p className={classes.para}>
            <Link className='contact-me' to='/contact-me'>Contact Me!</Link>
        </p>
    </div>
};

export default About;