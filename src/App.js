import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Leads from './Pages/Leads';
import EditUser from './Pages/Users/EditUser';
import User from './Pages/Users/User';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Leads" component={Leads} />
          <Route path="/user/edit/:id" component={EditUser} />
          <Route path="/users/:id" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;