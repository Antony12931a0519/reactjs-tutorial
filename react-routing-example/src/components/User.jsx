import React, { Component } from 'react';
import {browserHistory} from 'react-router';


class User extends Component {
    
gotoHome (){
    
        browserHistory.push("/home");
    }

    render() {
        return (
            <div className="App">
                <h1>Users</h1>
                <h3>User Id:{this.props.params.id}</h3>
                <button className="btn primary success" onClick={this.gotoHome}>Goto Home</button>
            </div>
        );
    }
}
export default User;