import React, {Component} from 'react';
import './Contact.css';
import link from './img/link.png';
import git from './img/github.png';

class Contact extends Component {
    render() {
        return(
            <div className="Contact">
                <h2>Contact Me</h2>
                <div className="social-container">
                    <div className="column-1">
                        <div className="line1">
                            <img src={link} alt="link"/>
                            <p><span class="bold">Linkedin:</span><br />@DevonSihra</p>
                        </div>
                    </div>
                    <div class="column-2">
                        <div class="line1">
                            <img src={git} alt="git"/>
                            <p><span class="bold">GitHub:</span><br/> <a href="https://github.com/dsihra1?tab=repositories">@dsihra1</a></p>
                        </div>
                    </div> 
                </div>   
            </div>    
        );
    }
}

export default Contact;