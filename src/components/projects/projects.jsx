import { Link } from 'react-router-dom';

import {TfiEmail} from 'react-icons/tfi';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

import classes from './projects.module.css';
import FoodImg from './../../project_images/food_order_app.png';
import TodoImg from './../../project_images/todo_app.png';
import ContactImg from './../../project_images/contact_list.png';
import BooksImg from './../../project_images/boook_list.png';
import CityLookUpImg from './../../project_images/city_look_up.png';
import WeatherApp from './../../project_images/weather-app.png';
import SnakeGame from './../../project_images/snake_game.png';
import AlgoVisualizer from './../../project_images/algo-visualizer.png';


const Projects = () => {
    return <><div className={classes.projects}>
        <p style={{ color: 'gray', fontSize: '1.3rem', marginLeft: '25px', marginRight: '25px', marginTop: '2.5rem' }}>
            Due to the passion of learning the new and continuosly emerging technologies, I started working with the Web Development and made some projects that will help me out in my day to day life, also while learning the DataStructures and Algorithms I have tried to implement them and made some interesting visualizations that helps me and my friends to understand them easily.
            Visit my projects and take a look at them. If you like my projects, don't forget to give a review.

            <br />Found my projects Inseresting, You can contact me here: <Link to='/contact-me'>Contact Me</Link>
            <br />More Projects Loading Soon.....
        </p>
        <div className={classes.basic}>
            <ul>
                <li>
                    <a href='https://weather-app-khaki-rho.vercel.app/' target='_blank'>
                        <img src={WeatherApp} alt="FoodOrderApp" />
                        <a>Weather Application</a>
                    </a>
                    <p>Developed a web application, using an API, that displays the weather status of a city for every hour of the current day based on the user input.</p>
                    <p><strong>Skills Used: </strong>ReactJs, RestAPI, HTML, CSS</p>
                </li>
                <li>
                    <a href='https://algo-visualizer-three.vercel.app/' target='_blank'>
                        <img src={AlgoVisualizer} alt="Algorithm Visualizer" />
                        <a>Algorithm Visualizer</a>
                    </a>
                    <p>Developed a web application that gives the user a deep understanding about how the algorithms like sorting, searching, seive etc works, with the help of different array sizes at different speeds based on the users interest.</p>
                    <p><strong>Skills Used: </strong>ReactJs, HTML, CSS, BootStrap</p>
                </li>
                <li>
                    <a href='https://food-order-app-ruby-seven.vercel.app/' target='_blank'>
                        <img src={FoodImg} alt="FoodOrderApp" />
                        <a>Food Order App</a>
                    </a>
                    <p>Developed a food order application which allows the user to add the desired food items to the cart and ordering them.</p>
                    <p><strong>Skills Used: </strong>ReactJs, Context, HTML, CSS</p>
                </li>
                <li>
                    <a href='https://nivi327.github.io/snake-game/' target='_blank'>
                        <img src={SnakeGame} alt="TodoApp" />
                        <a>Snake Game</a>
                    </a>
                    <p>Created the popular snake game, that we always choose to play in our free time.</p>
                    <p><strong>Skills Used: </strong>HTML, CSS, JavaScript</p>
                </li>
                <li>
                    <a href='https://to-do-app-rust-five.vercel.app/' target='_blank'>
                        <img src={TodoImg} alt="TodoApp" />
                        <a>Todo List App</a>
                    </a>
                    <p>Developed a simple Todo application, to keep track of the daily activities from time to time.</p>
                    <p><strong>Skills Used: </strong>ReactJs, HTML, CSS</p>
                </li>
                <li>
                    <a href='https://nivi327.github.io/ContactListFiltering/' target='_blank'>
                        <img src={ContactImg} alt="ContactList" />
                        <a>Contact List</a>
                    </a>
                    <p>Created a contact list application which allows the user to add the details of a person to the list.</p>
                    <p><strong>Skills Used: </strong>HTML, CSS, Bootstrap</p>
                </li>
                <li>
                    <a href='https://nivi327.github.io/BookListApp/' target='_blank'>
                        <img src={BooksImg} alt="BooksList" />
                        <a>Book List Application</a>
                    </a>
                    <p>Designed a Book List Application that allows user to add all the favourite books at one place.</p>
                    <p><strong>Skills Used: </strong>HTML, CSS, Bootstrap</p>
                </li>
                <li>
                    <a href='https://nivi327.github.io/CitySearchApp/' target='_blank'>
                        <img src={CityLookUpImg} alt="city_search" />
                        <a>City Search Application</a>
                    </a>
                    <p>Designed a City Search Application that allows user to search for the desired city in India to know the location of that city.</p>
                    <p><strong>Skills Used: </strong>HTML, CSS, Bootstrap</p>
                </li>
            </ul>
        </div>
    </div>
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
    </>
};

export default Projects;