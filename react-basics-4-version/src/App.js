import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Agenda from './components/Agenda';
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
        
        <switch>
            <Route  component={Header} />        
            <Route exact path="/" component={Header} />
            <Route exact path={"/home"} component={Home}></Route>
            <Route exact path={"/aboutus"} component={Aboutus}></Route>
            <Route exact path={"/agenda/:id"} component={Agenda}></Route>
            <Route  component={Footer} />
            </switch>
        </Router>
      </div>
    );
  }
}
export default App;
