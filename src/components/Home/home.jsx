import { Link } from 'react-router-dom';
import classes from './home.module.css';

import Resume from './../../resume/NIVAS BODAPATI_NEW (05-04-2023)_removed.pdf';

const Home = () => {
    return <div className={classes.home}>
        <span>Hey There,</span>
        <span>I'm Nivas Bodapati,</span>
        <span>A MERN Stack Developer</span>
        <div className={classes.buttons}>
            <span className={classes['contact-me']}><Link to="/contact-me">Contact Me!</Link></span>
            <form method="get" action={Resume}>
                <button type="submit" className={classes['contact-me']}>My Resume</button>
            </form>
        </div>
    </div>
};

export default Home;