import React from 'react'
import classes from './Footer.module.css';

import {TfiEmail} from 'react-icons/tfi';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

const Footer = () => {
  return (
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
  )
}

export default Footer