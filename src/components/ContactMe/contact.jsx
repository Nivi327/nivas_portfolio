import classes from './contact.module.css';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

import {TfiEmail} from 'react-icons/tfi';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

const Contact = () => {
    const [sent, setSent] = useState(false);
    const [error, setError] = useState({ err: false, text: "Email not sent. Please try sending email to nivasbodapati.abc@gmail.com" });
    const [details, setDetails] = useState({ name: "", email: "", subject: "", message: "" });
    const form2 = useRef();
    const clearFields = () => {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('subject').value = "";
        document.getElementById('message').value = "";
    }
    const sendEmail = (e) => {
        e.preventDefault();
        if (!details.email.includes('@') || !details.email.includes('.')) {
            setError(() => {
                return { err: true, text: "Exact Email is required" };
            })
            setInterval(() => {
                setError((prevError) => {
                    return { ...prevError, err: false };
                })
            }, 3000);
        }
        else if (details.name.length === 0) {
            setError(() => {
                return { err: true, text: "Full Name is required" };
            })
            setInterval(() => {
                setError((prevError) => {
                    return { ...prevError, err: false };
                })
            }, 3000);
        }
        else if (details.subject.length === 0) {
            setError(() => {
                return { err: true, text: "Subject is required" };
            })
            setInterval(() => {
                setError((prevError) => {
                    return { ...prevError, err: false };
                })
            }, 3000);
        }
        else if (details.message.length === 0) {
            setError(() => {
                return { err: true, text: "Message is required" };
            })
            setInterval(() => {
                setError((prevError) => {
                    return { ...prevError, err: false };
                })
            }, 3000);
        }
        else {
            emailjs.sendForm('service_portfolio', 'template_ljmxpt4', e.target, 'mIplpD7zIvbealkM0')
                .then((result) => {
                    setSent(true)
                    setInterval(() => {
                        setSent(false);
                    }, 3000);
                    clearFields();
                }, (error) => {
                    setError(() => {
                        return { err: true, text: "Email not sent. Please try sending email to nivasbodapati.abc@gmail.com" };
                    })
                    setInterval(() => {
                        setError((prevError) => {
                            return { ...prevError, err: false };
                        })
                    }, 3000);

                });
        }
    }
    return <><div className={classes.contact}>
        <div className={`${classes.sent} ${sent ? classes.show : classes.hide}`}>
            <p>You mail has been recieved. Thanks for contacting me.</p>
        </div>
        <div className={`${classes.error} ${error.err ? classes.show : classes.hide}`}>
            <p>{error.text}</p>
        </div>
        <div className={classes.h3}>
            <h3>Contact Me</h3>
            <span>Please don't hesitate to use the form, to get in touch with me.</span>
        </div>
        <form ref={form2} className={classes.form} onSubmit={sendEmail}>
            <div className={classes['name-email']}>
                <input type="text" name='name' id='name' placeholder='Enter Your Full Name' autoComplete='off' onChange={(e) => setDetails((prevDetails) => { return { ...prevDetails, name: e.target.value } })} />
                <input type="email" name="email" id="email" placeholder='Enter Your Email' autoComplete='off' onChange={(e) => setDetails((prevDetails) => { return { ...prevDetails, email: e.target.value } })} />
            </div>
            <input type="text" name="subject" id="subject" placeholder='Subject' className={classes.subject} autoComplete='off' onChange={(e) => setDetails((prevDetails) => { return { ...prevDetails, subject: e.target.value } })} />
            <textarea name="message" id="message" cols="30" rows="5" placeholder="Message" autoComplete='off' onChange={(e) => setDetails((prevDetails) => { return { ...prevDetails, message: e.target.value } })}></textarea>
            <button type="submit">Send A Mail!</button>
        </form>
    </div>
    </>
};

export default Contact;