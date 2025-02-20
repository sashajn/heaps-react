import React, {Component} from 'react';
import './App.css';

var serverUrl = 'http://10.2.24.43:4001/';

class Harvest extends Component {

    handleUpdateHarvestClick =(e)=>
    {
        var {setActiveView,setHarvestToUpdate,id} = this.props;
        setHarvestToUpdate(id);
        setActiveView('edit-harvest');
    }
    handleDeleteHarvestClick =() =>{
        var {id, deleteHarvests} =this.props;
        deleteHarvests(id);

    }

    render(){

        var {name,description,location,type,photo} = this.props;
        return(
            <div className="card harvest">
                <img className="card-img-top" src={serverUrl+photo} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h4 className="card-location">{location}</h4>
                <p className="card-text">{description}</p>
                <p>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-edit" onClick={this.handleUpdateHarvestClick}></i>
                    <i className="fas fa-trash" onClick={this.handleDeleteHarvestClick}></i>
                </p>          
                </div>
            </div> 
        );
    }
}

export default Harvest;