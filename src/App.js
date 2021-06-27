import './App.css';
import {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Navbar from './components/navbar';
import AboutPage from "./pages/about";
import HomePage from './pages/home';

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/home" render={() => <HomePage/>}/>
            <Route path="/about" component={AboutPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
