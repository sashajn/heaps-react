import React, {Component} from 'react';
import './App.css';

class Harvest extends Component {

    render(){

        var {name,description} = this.props;
        return(
            <div className="card harvest">
                <img className="card-img-top" src="plant.jpg" alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h4 className="card-location">Location</h4>
                <p className="card-text">{description}</p>
                <p>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash"></i>
                </p>          
                </div>
            </div> 
        );
    }
}

export default Harvest;