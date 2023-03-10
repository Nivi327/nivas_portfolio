import classes from './skills.module.css';

const Skills = () => {
    return <div className={classes.skills}>
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
                    <li>TypeScript</li>
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
                <li>Java</li>
            </ul>
        </div>
        <div className={classes.list}>
            <span className={classes.heading}>Other Skills</span>
            <ul>
                <li>Git & GitHub</li>
                <li>Vercel</li>
                <li>FireBase</li>
            </ul>
        </div>
    </div>
};

export default Skills;