import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import User from './components/User';
import ContactUs from './components/ContactUs';
import Home from './components/Home';

class App extends Component {

  render() {
    return (
 <Router history={browserHistory}>

<Route path={"/"} component={Header}>
<IndexRoute component={Home}/>
<Route path={"user/:id"} component={User}></Route>
<Route path={"contactus"} component={ContactUs}></Route>
<Route path={"home"} component={Home}></Route>


</Route>

</Router>



    );
  }
}

export default App;
