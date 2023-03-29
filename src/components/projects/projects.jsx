import classes from './projects.module.css';
import FoodImg from './../../project_images/food_order_app.png';
import TodoImg from './../../project_images/todo_app.png';
import ContactImg from './../../project_images/contact_list.png';
import BooksImg from './../../project_images/boook_list.png';
import CityLookUpImg from './../../project_images/city_look_up.png';
import PortfolioImg from './../../project_images/basic_portfolio.png';
import WeatherApp from './../../project_images/weather-app.png';


const Projects = () => {
    return <div className={classes.projects}>
        <h2 className={classes['good-view']}>*Click on the project names to view my projects*</h2>
        <div className={classes.basic}>
            <ul>
                <li>
                    <a href='https://weather-app-khaki-rho.vercel.app/' target='_blank'>
                        <img src={WeatherApp} alt="FoodOrderApp" />
                        <a>Weather Application</a>
                    </a>
                    <p>Developed a web application, using an API, that displays the weather status of a city based on the user input.</p>
                    <p><strong>Skills Used: </strong>ReactJs, HTML, CSS</p>
                </li>
                <li>
                    <a href='https://food-order-app-ruby-seven.vercel.app/' target='_blank'>
                        <img src={FoodImg} alt="FoodOrderApp" />
                        <a>Food Order App</a>
                    </a>
                    <p>Developed a food order application which allows the user to add the desired food items to the cart and ordering them.</p>
                    <p><strong>Skills Used: </strong>ReactJs, HTML, CSS</p>
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
                <li>
                    <a href='https://nivi327.github.io/basic_portfoilo/' target='_blank'>
                        <img src={PortfolioImg} alt="portfolio" />
                        <a>Portfolio</a>
                    </a>
                    <p>Designed a portfolio using HTML and CSS.</p>
                    <p><strong>Skills Used: </strong>HTML, CSS</p>
                </li>
            </ul>
        </div>
    </div>
};

export default Projects;