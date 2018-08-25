import React, {Component} from 'react';
import './Portfolio.css';
import Movie from './img/movie.jpg';
import WorkOut from './img/workout.svg';
import CheckList from './img/checklist.png';

class Portfolio extends Component{
    render(){

        return(
            <div>
                <div className="Portfolio">
                    <h2>My Recent Projects</h2>
                    <div className="project1">
                        <span>
                            <img src={Movie} alt="movie"/>
                        </span>
                            <h4>Movie Search</h4>
                            <p>ADO.NET</p>
                            <a href="#" className="#btnWork">View Project</a>
                    </div>
                    <div className="project2">
                        <span>
                            <img src={WorkOut} alt="workout"/>
                        </span>
                        <h4>WorkOut App</h4>
                        <p>XML, C#</p>
                        <a href="#" className="#btnWork">View Project</a>
                    </div>
                    <div className="project3">
                        <span>
                            <img src={CheckList} alt="CheckList"/>
                        </span>
                        <h4>CheckList</h4>
                        <p>HTML, CSS, JavaScript</p>
                        <a href="#" className="#btnWork">View Project</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Portfolio; 