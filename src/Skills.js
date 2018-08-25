import React, {Component} from 'react';
import './Skills.css';
import cssLogo from './img/cssLogo.png';
import jsLogo from './img/javascript.png';
import cLogo from './img/logoC.png';
import htmlLogo from './img/htmlLogo.png';

class Skills extends Component {
    render() {

        return(
            <div className="Skills">
                <h2>My Skills</h2>
                <div className="row">
                    <div>
                        <span>
                            <img src={htmlLogo} alt="html"/>
                        </span>
                        <h4>HTML</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span>
                            <img src={cssLogo} alt="css"/>
                        </span>
                        <h4>CSS</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span>
                            <img src={jsLogo} alt="js"/>
                        </span>
                        <h4>JavaScript</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <span>
                            <img src={cLogo} alt="c"/>
                        </span>
                        <h4>C#</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>  
                <br/>  
                <br/>
                <br/>
                <a href="#about" className="#btnWork">Past Work</a>
            </div>
        );

    }
}


export default Skills;