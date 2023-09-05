import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Certificates.module.css';

import CertificateJSON from './certificates.json';

import SmartInterviews from './certificateImages/smart-interviews-certificate.png';
import PythonCertiMSO from './certificateImages/mta-introduction-to-programming-using-python-certified-2022.png'; // idx = 1
import PythonCertiHack from './certificateImages/Python(Basic).png';
import ProblemSolvingHack from './certificateImages/problemSolving(Basic).png';
import ReactCertiHack from './certificateImages/react(Basic).png';
import NodeCertiHack from './certificateImages/Node(Basic).png';
import SQLCertiHack from './certificateImages/SQL(Basic).png';
import JavaScriptCertHack from './certificateImages/JavaScript(Basic).png';
import ReactCerti from './certificateImages/UdemyReactJs-1.png';
import SQLCerti from './certificateImages/SQL-CERTIFICATE-1.png';

const images_array = [SmartInterviews, PythonCertiMSO, PythonCertiHack, ProblemSolvingHack, ReactCertiHack, NodeCertiHack, SQLCertiHack, JavaScriptCertHack, ReactCerti, SQLCerti];

const Certificates = () => {
    return (
        <><div className={classes.projects}>
            <p style={{ color: '#B2B2B2', fontSize: '1.3rem', marginLeft: '40px', marginRight: '40px', marginTop: '2.5rem' }}>
                Due to the passion of learning the new and continuosly emerging technologies, I started learning different skills in different platforms such as Udemy and testing my skills by writing for the certifications in platforms such as HackerRank.
                The below are my certifications from different platforms such as Smart Interviews, Udemy etc.

                <br />Found my certifcates interesting, checkout my projects: <Link to='/projects'>My Projects</Link>
                <br />More Certificates Loading Soon.....
            </p>
            <div className={classes.basic}>
                <ul>
                    {CertificateJSON.map((obj, idx) => {
                        return <li key={idx}>
                            <a>
                                <img src={images_array[idx]} alt={obj.title} />
                            </a>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                                {
                                    obj?.href && obj?.href.length > 0 ? <>
                                        <a className={classes['href-btn']} style={{
                                            fontSize: '1.3rem'
                                        }} href={obj.href}>View Certificate</a>
                                    </> : <>
                                        <form method='get' action={images_array[idx]} target='_blank'>
                                            <button type='submit' className={classes.button}>View Certicate</button>
                                        </form>
                                    </>
                                }
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Certificates;