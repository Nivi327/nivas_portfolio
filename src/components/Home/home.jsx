import { Link } from 'react-router-dom';
import classes from './home.module.css';
import { Typewriter } from 'react-simple-typewriter'

import Resume from './../../resume/NIVAS BODAPATI_NEW (05-04-2023)_removed.pdf';

const Home = () => {
    return <div className={classes.home}>
        <span className={classes.greet}>Hey There,</span>
        <span className={classes.name}>I'm Nivas Bodapati, I'm a</span>
        <span style={{color: 'white', fontSize:'2.4rem'}}>
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
};

export default Home;