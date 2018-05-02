import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

   
    render() {
        return (
            
            <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to={"/home"}>ReactDemoApplication</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={"/home"} >Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/aboutus"} >Aboutus </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/agenda"} >Agenda </Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>               
            </nav>
            {this.props.children}
            </div>
        );
    }
}
export default Header;