import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jeu1 from './Jeu1';
import Jeu2 from './Jeu2';
import Jeu3 from './Jeu3';
import Jeu4 from './Jeu4';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Person extends React.Component {
  render() {
    return (
      <p>Hello I am {this.props.firstname} {this.props.lastname}</p>
    );
  }
}

class App extends React.Component {
  render() {
    return (
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Jeux à gogo</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={'/'}>Jeu 1</Nav.Link>
              <Nav.Link as={Link} to={'/jeu2'}>Jeu 2</Nav.Link>
              <Nav.Link as={Link} to={'/jeu3'}>Jeu 3</Nav.Link>
              <Nav.Link as={Link} to={'/jeu4'}>Jeu 4</Nav.Link>
            </Nav>
          </Navbar>
          <h1>Hello World</h1>
          <Person firstname="Ali" lastname="Koudri" />
          <Switch>
              <Route exact path='/' component={Jeu1} />
              <Route path='/jeu2' component={Jeu2} />
              <Route path='/jeu3' component={Jeu3} />
              <Route path='/jeu4' component={Jeu4} />
          </Switch>
        </Router>
    );
  }
}

export default App;
