import { Link } from 'react-router-dom';
import classes from './home.module.css';

const Home = () => {
    return <div className={classes.home}>
        <span>Hey There,</span>
        <span>I'm Nivas Bodapati,</span>
        <span>A MERN Stack Developer</span>
        <span className={classes['contact-me']}><Link to="/contact-me">Contact Me!</Link></span>
    </div>
};

export default Home;