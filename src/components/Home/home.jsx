import { Link } from 'react-router-dom';
import classes from './home.module.css';
import { Typewriter } from 'react-simple-typewriter';

import {TfiEmail} from 'react-icons/tfi';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

import Resume from './../../resume/NIVAS BODAPATI_NEW (23-06-2023).pdf';

const Home = () => {
    return <div className={classes['home-content']}><div className={classes.home}>
        <span className={classes.greet}>Hey There,</span>
        <span className={classes.name}>I'm Nivas Bodapati, I'm a</span>
        <span style={{ color: 'white', fontSize: '2.4rem' }}>
            <Typewriter
                words={['MERN Stack Developer', 'Aspiring Software Engineer', 'Tech Enthusiastic', 'B.Tech Student', 'LifeLong Learner']}
                loop={0}
                cursor
                typeSpeed={40}
                deleteSpeed={40}
                delaySpeed={1050}
            />
        </span>
        <div className={classes.buttons}>
            <span className={classes['contact-me']}><Link to="/contact-me">Let's Connect!</Link></span>
            <form method="get" action={Resume}>
                <button type="submit" className={classes['contact-me']}>My Resume</button>
            </form>
        </div>
    </div>
    </div>
};

export default Home;