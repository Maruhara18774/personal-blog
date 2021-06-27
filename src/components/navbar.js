import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar__list">
                    <li>
                        <Link to="/home">home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar
