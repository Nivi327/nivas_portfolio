import { Link } from 'react-router-dom';
import classes from './home.module.css';
import { Typewriter } from 'react-simple-typewriter';

import {TfiEmail} from 'react-icons/tfi';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

import Resume from './../../resume/NIVAS BODAPATI_NEW (10-06-2023).pdf';

const Home = () => {
    return <div className={classes['home-content']}><div className={classes.home}>
        <span className={classes.greet}>Hey There,</span>
        <span className={classes.name}>I'm Nivas Bodapati, I'm a</span>
        <span style={{ color: 'white', fontSize: '2.4rem' }}>
            <Typewriter
                words={['Web Developer', 'Tech Enthusiastic', 'MERN Stack Developer', 'B.Tech Student', 'LifeLong Learner']}
                loop={0}
                cursor
                typeSpeed={40}
                deleteSpeed={40}
                delaySpeed={1050}
            />
        </span>
        <div className={classes.buttons}>
            <span className={classes['contact-me']}><Link to="/contact-me">Contact Me!</Link></span>
            <form method="get" action={Resume}>
                <button type="submit" className={classes['contact-me']}>My Resume</button>
            </form>
        </div>
    </div>
        <div className={classes.footer}>
            <div className={classes.copyrights}>
                Copyright &copy; 2023 All Rights Reserved by <a className='nivas-bodapati' href='https://nivas-portfolio.vercel.app'>Nivas Bodapati</a>
            </div>
            <div className={classes.icons}>
                <a href="mailto:nivasbodapati.abc@gmail.com"><TfiEmail className={classes.icon} /></a>
                <a href="https://github.com/Nivi327"><BsGithub className={classes.icon} /></a>
                <a href="https://www.linkedin.com/in/nivas-bodapati-455443219"><BsLinkedin className={classes.icon} /></a>
            </div>
        </div>
    </div>
};

export default Home;