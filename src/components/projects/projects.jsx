import classes from './projects.module.css';
import FoodImg from './../../project_images/food_order_app.png';
import TodoImg from './../../project_images/todo_app.png';
import ContactImg from './../../project_images/contact_list.png';
import BooksImg from './../../project_images/boook_list.png';
import CityLookUpImg from './../../project_images/city_look_up.png';
import PortfolioImg from './../../project_images/basic_portfolio.png';


const Projects = () => {
    return <div className={classes.projects}>
        <h2 className={classes['good-view']}>*Click on the project names to view my projects*</h2>
        <div className={classes.basic}>
            <h3>React Based Projects</h3>
            <ul>
                <li>
                    <a href='https://food-order-app-ruby-seven.vercel.app/' target='_blank'>
                        <img src={FoodImg} alt="FoodOrderApp" />
                        <a>Food Order App</a>
                    </a>
                    <p>Designed a food ordered website using React Context to order the food the user like by adding it into Cart.</p>
                    <p><strong>Skills Used: </strong>ReactJs, HTML, CSS</p>
                </li>
                <li>
                    <a href='https://to-do-app-rust-five.vercel.app/' target='_blank'>
                        <img src={TodoImg} alt="TodoApp" />
                        <a>Todo List App</a>
                    </a>
                    <p>Designed a simple todolist to plan the day perfectly.</p>
                    <p><strong>Skills Used: </strong>ReactJs, HTML, CSS</p>
                </li>
            </ul>
        </div>
        <div className={classes.basic}>
            <h3>HTML and CSS Based Projects</h3>
            <ul>
                <li>
                    <a href='https://nivi327.github.io/ContactListFiltering/' target='_blank'>
                        <img src={ContactImg} alt="ContactList" />
                        <a>Contact List</a>
                    </a>
                    <p>In this website we can create and add contacts to their respective starting alphabet and can filter them.</p>
                </li>
                <li>
                    <a href='https://nivi327.github.io/BookListApp/' target='_blank'>
                        <img src={BooksImg} alt="BooksList" />
                        <a>Book List App</a>
                    </a>
                    <p>In this website we can add the details of our favourite book and can view it later in the same browser in that device.</p>
                </li>
                <li>
                    <a href='https://nivi327.github.io/CitySearchApp/' target='_blank'>
                        <img src={CityLookUpImg} alt="city_search" />
                        <a>City Search</a>
                    </a>
                    <p>We can search the places in India and their latitudes and longitudes as well using the JSON format.</p>
                </li>
                <li>
                    <a href='https://nivi327.github.io/basic_portfoilo/' target='_blank'>
                        <img src={PortfolioImg} alt="portfolio" />
                        <a>Portfolio</a>
                    </a>
                    <p>This is a basic portfolio in HTML and CSS.</p>
                </li>
            </ul>
        </div>
    </div>
};

export default Projects;