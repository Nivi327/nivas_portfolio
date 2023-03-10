import classes from './Navigation.module.css';

const Links = () => {
    return <div className={classes.links}>
    <a className={classes.about}>About Me</a>
    <a className={classes.skill}>My Skills</a>
    <a className={classes.project}>Projects</a>
    <a className={classes.contactme}>Contact Me</a>
</div>
};

export default Links;