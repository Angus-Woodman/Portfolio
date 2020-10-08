import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import '../../Styles/NavBar.css';

const NavBar = (props) => {
    return (
        <nav className="navBar">
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            <NavLink activeClassName="active" to="/projects">Projects</NavLink>
            <button onClick={props.history.goBack}>Back</button>
        </nav>
    );
}

export default withRouter(NavBar);
