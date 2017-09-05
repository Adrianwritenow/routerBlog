import React, {Component} from 'react';
// IMPORT NavLink <<<<<<<<<<<<<<<
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){


    return (
        <div className="navBarCont">
        <nav className="navbar navbar-dark bg-dark">
          <ul className="nav">
            <li>
            <NavLink activeClassName="selected" className="nav-link" exact to="/" activeStyle={{color:"red"}}>Home</NavLink>

            </li>
            <li>
              <NavLink activeClassName="selected" className="nav-link" exact to="/create">Create Post</NavLink>

            </li>
            <li>
              <NavLink activeClassName="selected" className="nav-link" exact to="/show">Show All Post</NavLink>
            </li>
          </ul>
        </nav>

      {this.props.children}
      
    </div>
  );
}
}
