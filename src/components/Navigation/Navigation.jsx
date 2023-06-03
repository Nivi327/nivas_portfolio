import React, {useState} from "react";
import classes from './Navigation.module.css';

import DP from './../../images/DP1.jpg';

import { Link, NavLink } from 'react-router-dom';
import { GrLinkedin } from 'react-icons/gr';
import { AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';


const Navigation = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    let activeStyle = {
        color: 'aqua',
        transition: '1s ease-in-out'
    }

    const toggleClassList = () => {
        setIsVisible(prevState => {return !prevState})
    }

    return <>
        <div className={classes.mobile}>
            <div className={classes.icon}>
                <div className={classes.hamburger} onClick={toggleClassList}>
                    <a><RxHamburgerMenu className={classes['hamburger-icon']} /></a>
                </div>
            </div>
            <div className={isVisible? classes['show-mobile-content']: classes['hide-mobile-content']}>
                <div className={classes.img}>
                    <Link to='/' onClick={toggleClassList}>
                        <img src={DP} className={classes.dp} />
                        <span>Nivas</span>
                    </Link>
                    <span className={classes.span2}>A MERN Stack Developer</span>
                </div>
                <div className={classes.links}>
                    <NavLink to='/about-me' style={({ isActive }) => isActive ? activeStyle : undefined} onClick={toggleClassList}>About Me</NavLink>
                    <NavLink to='/my-skills' style={({ isActive }) => isActive ? activeStyle : undefined} onClick={toggleClassList}>My Skills</NavLink>
                    <NavLink to='/projects' style={({ isActive }) => isActive ? activeStyle : undefined} onClick={toggleClassList}>Projects</NavLink>
                    <NavLink to='/contact-me' style={({ isActive }) => isActive ? activeStyle : undefined} onClick={toggleClassList}>Contact Me</NavLink>
                </div>
                <div className={classes.icons}>
                    <a href="https://www.linkedin.com/in/nivas-bodapati-455443219" target="_blank"><GrLinkedin className={classes.icon} /></a>
                    <a href="https://github.com/Nivi327" target="_blank"><AiOutlineGithub className={classes.icon} /></a>
                </div>
            </div>
        </div>

        <div className={classes.navigation}>
            <div className={classes.img}>
                <Link to='/'>
                    <img src={DP} className={classes.dp} />
                    <span>Nivas</span>
                </Link>
                <span className={classes.span2}>A MERN Stack Developer</span>
            </div>
            <div className={classes.links}>
                <NavLink to='/about-me' style={({ isActive }) => isActive ? activeStyle : undefined}>About Me</NavLink>
                <NavLink to='/my-skills' style={({ isActive }) => isActive ? activeStyle : undefined}>My Skills</NavLink>
                <NavLink to='/projects' style={({ isActive }) => isActive ? activeStyle : undefined}>Projects</NavLink>
                <NavLink to='/contact-me' style={({ isActive }) => isActive ? activeStyle : undefined}>Contact Me</NavLink>
            </div>
            <div className={classes.icons}>
                <a href="https://www.linkedin.com/in/nivas-bodapati-455443219" target="_blank"><GrLinkedin className={classes.icon} /></a>
                <a href="https://github.com/Nivi327" target="_blank"><AiOutlineGithub className={classes.icon} /></a>
            </div>
        </div>
    </>
};

export default Navigation;