import React, { Component } from 'react';
//import './App.css';
import './Navbar.css';
class Navbar extends Component {
  render() {
    const section = ['Home', 'About Me', 'Skills', 'Portfolio', 'Contact'];
    const navLinks = section.map( section => {
        return(
         <li><a href={"#" + section}>{section}</a></li>
    )
    });
    return (
      <nav>
          <h2 className="logo">{this.props.logoTitle}</h2>

          <ul>
              {navLinks}
          </ul>
      </nav> 

    );
  }
}

export default Navbar;