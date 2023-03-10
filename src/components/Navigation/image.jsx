import classes from './Navigation.module.css';

import DP from './../../images/DP1.jpg';

const Image = () => {
    return <div className={classes.img}>
        <img src={DP} className={classes.dp}/>
        <span>Nivas</span>
        <span className={classes.span2}>A MERN Stack Developer</span>
    </div>
};

export default Image;