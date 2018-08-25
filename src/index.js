import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render(){
        return(
            <div>
                <Navbar logoTitle="React Project" />
                <Header title="Devon Sihra" button="About Me"/>
                <About />
                <Skills />
                <Portfolio />
                <Contact />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
