import React, {Component} from 'react';
import './App.css';

class Harvest extends Component {

    handleDeleteHarvestClick =() =>{
        var {id, deleteHarvests} =this.props;
        deleteHarvests(id);

    }

    render(){

        var {name,description,location} = this.props;
        return(
            <div className="card harvest">
                <img className="card-img-top" src="plant.jpg" alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h4 className="card-location">{location}</h4>
                <p className="card-text">{description}</p>
                <p>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash" onClick={this.handleDeleteHarvestClick}></i>
                </p>          
                </div>
            </div> 
        );
    }
}

export default Harvest;