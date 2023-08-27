import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route exact path='/about'>
          <AboutPage/>
        </Route>
        <Route exact path='/work'>
          <ProjectsPage/>
        </Route>
        <Route exact path='/contact'>
          <ContactPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

