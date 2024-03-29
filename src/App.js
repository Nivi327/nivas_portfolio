import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import About from './components/AboutMe/about';
import Skills from './components/MySkills/skills';
import Certificates from './components/Certificates/Certificates.jsx';
import Projects from './components/projects/projects.jsx';
import Contact from './components/ContactMe/contact';
import Home from './components/Home/home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='content'>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about-me' element={<About />}/>
        <Route path='/my-skills' element={<Skills />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/certificates' element={<Certificates />}/>
        <Route path='/contact-me' element={<Contact />}/>
      </Routes>
      <Footer />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
