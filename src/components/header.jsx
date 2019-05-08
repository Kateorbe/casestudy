import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <ul className="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#passenger">Passenger</a></li>
                    <li><a href="#flight">Flight</a></li>  
                    <li><a href="#bookflight">Book a Flight</a></li>
                    <li>{this.props.date}</li>
                </ul>
            </div>
        );
    }
}

export default Header;