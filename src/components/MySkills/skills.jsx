import Footer from '../Footer/Footer';
import classes from './skills.module.css';
import { Link } from 'react-router-dom';

import {TfiEmail} from 'react-icons/tfi';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

const Skills = () => {
    return <>
        <p style={{ color: 'gray', fontSize: '1.3rem', marginLeft: '25px', marginRight: '25px', marginTop: '2.5rem' }}>
            Due to a profound interest in the algorithm implementations and emerging trending technologies. I had taken a step forward to learn the beautiful algorithms in Machine Learning, AI etc.. As a part of this step, I started learning the Web Development and 
            started creating some projects and learnt the following skills till now and will try to learn the skills that are needed to achieve my goal which is creating an algorithm on my own.
            <br />Found My Skills Inseresting, You can visit my projects here: <Link to='/projects'>My Projects</Link>
            <br />More Skills can be added Soon....
        </p>
        <div className={classes.skills}>
            <div className={classes.list}>
                <span className={classes.heading}>FrontEnd Skills</span>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                </ul>
            </div>
            <div className={classes.list}>
                <span className={classes.heading}>BackEnd Skills</span>
                <ul>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>MYSQL</li>
                </ul>
            </div>
            <div className={classes.list}>
                <span className={classes.heading}>Programming Languages</span>
                <ul>
                    <li>C language</li>
                    <li>Python</li>
                </ul>
            </div>
            <div className={classes.list}>
                <span className={classes.heading}>Other Technical Skills</span>
                <ul>
                    <li>Git & GitHub</li>
                    <li>PostMan</li>
                    <li>Vercel</li>
                    <li>FireBase</li>
                </ul>
            </div>
        </div>
    </>
};

export default Skills;