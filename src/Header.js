import React, {Component} from 'react';
import Background from './img/blue.jpg';
import './Header.css';

const myBackPic = {
    backgroundImage: `url( ${Background} )`,
    height: '60vh',
    backgroundSize: 'cover', 
    
    
}


class Header extends Component{

    render(){

        return(
           
            <header style={myBackPic}>
                <h1>{this.props.title}</h1>
                <p>Welcome to my Website</p>
                <a href="#button">{this.props.button}</a>
            </header>    

        );
    }

}

export default Header; 
