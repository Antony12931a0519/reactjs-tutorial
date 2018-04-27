import React from 'react';
import {Link} from 'react-router'

const Header = (props) => {
    return (
        <div class="container">
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <Link class="navbar-brand" to={"/"}>WebSiteName</Link>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/user/"+Math.random()}>User</Link></li>
                        <li><Link to={"/contactus"}>ContactUs</Link></li>
                    </ul>
                </div>
            </nav>
            <hr/>
            <div>{props.children} </div>
        </div>

    );
};
export default Header;