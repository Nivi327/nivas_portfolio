import classes from './contact.module.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();
    const clearFields = () => {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('subject').value = "";
        document.getElementById('message').value = "";
    }
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);
        emailjs.sendForm('service_portfolio', 'template_ljmxpt4', e.target, 'pLKp295GbvzAIxp6a')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return <div className={classes.contact}>
        <div className={classes.h3}>
            <h3>Contact Me</h3>
            <span>Please don't hesitate to use the form, to get in touch with me.</span>
        </div>
        <form ref={form} className={classes.form} onSubmit={sendEmail}>
            <div className={classes['name-email']}>
                <input type="text" name='name' id='name' placeholder='Enter Your Name' autoComplete='off'/>
                <input type="email" name="email" id="email" placeholder='Enter Your Email' autoComplete='off'/>
            </div>
            <input type="text" name="subject" id="subject" placeholder='Subject' className={classes.subject} autoComplete='off'/>
            <textarea name="message" id="message" cols="30" rows="5" placeholder="Message" autoComplete='off'></textarea>
            <button type="submit" onClick={clearFields}>Send A Mail!</button>
        </form>
    </div>
};

export default Contact;