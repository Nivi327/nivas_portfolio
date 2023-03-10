import classes from './contact.module.css';

const Contact = () => {
    const clearFields = () => {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('subject').value = "";
        document.getElementById('message').value = "";
    }
    return <div className={classes.contact}>
        <div className={classes.h3}>
            <h3>Contact Me</h3>
            <span>Please don't hesitate to use the form, to get in touch with me.</span>
        </div>
        <form className={classes.form} action="mailto:nivasbodapati.abc@gmail.com" method='POST' encType='text/plain'>
            <div className={classes['name-email']}>
                <input type="text" name='name' id='name' placeholder='Enter Your Name'/>
                <input type="email" name="email" id="email" placeholder='Enter Your Email'/>
            </div>
            <input type="text" name="subject" id="subject" placeholder='Subject' className={classes.subject}/>
            <textarea name="message" id="message" cols="30" rows="5" placeholder="Message"></textarea>
            <button type="submit" onClick={clearFields}>Send A Mail!</button>
        </form>
    </div>
};

export default Contact;