import classes from './projects.module.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return <div className={classes.projects}>
        <h2 className={classes['good-view']}>*Click on the project names to view my projects*</h2>
        <div className={classes.basic}>
            <h3>React Based Projects</h3>
            <ul>
                <li>
                    <a href='https://food-order-app-ruby-seven.vercel.app/' target='_blank'>Food Order App</a>
                    <p>This is a website in which the features are adding items to cart, ordering, deleting the items from the cart.</p>
                </li>
                <li>
                    <a href='https://to-do-app-rust-five.vercel.app/' target='_blank'>ToDo App</a>
                    <p>This is a website in which the features are adding the todo list from time to time which stores the data in local storage.</p>
                </li>
            </ul>
        </div>
        <div className={classes.basic}>
            <h3>HTML and CSS Based Projects</h3>
            <ul>
                <li>
                    <a href='https://nivi327.github.io/ContactListFiltering/' target='_blank'>Contacts List</a>
                    <p>In this website we can create and add contacts to their respective starting alphabet and can filter them.</p>
                </li>
                <li>
                    <a href='https://nivi327.github.io/BookListApp/' target='_blank'>Books List</a>
                    <p>In this website we can add the details of our favourite book and can view it later in the same browser in that device.</p>
                </li>
                <li>
                    <a href='https://nivi327.github.io/CitySearchApp/' target='_blank'>City Search</a>
                    <p>We can search the places in India and their latitudes and longitudes as well using the JSON format.</p>
                </li>
                <li>
                    <a href='https://nivi327.github.io/basic_portfoilo/' target='_blank'>A Basic Portfolio</a>
                    <p>This is a basic portfolio in HTML and CSS.</p>
                </li>
            </ul>
        </div>
    </div>
};

export default Projects;