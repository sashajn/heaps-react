import React, {Component} from 'react';
import Harvest from './Harvest.jsx';
import View from './View.jsx';
import EditHarvestForm from './EditHarvestForm.jsx';
import axios from 'axios';
import './App.css';

var urlPrefix = 'http://10.2.24.38:4001/api'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeView: 'harvests',
      harvests: [
        {
          // name: 'test-name',
          // description: 'test-description',  
        }   
      ],
      types:[],
      harvestToUpdate:null,

    }
  }

  setActiveView = (view) => {
    this.setState({ activeView: view });
  }
  setHarvestToUpdate = (id) =>
  {
    var foundHarvest = this.state.harvests.find((harvest) => {
      return harvest.id === id;
    })
    this.setState({harvestToUpdate:foundHarvest});
  }
  getHarvests = () => {
    axios.get(urlPrefix+'/harvests')
    .then(res => {
      this.setState({ harvests: res.data });
    })
  }

  componentDidMount(){
    this.getHarvests ();
  }
  updateHarvests =(id,data)=>{
    axios.put(urlPrefix + '/harvests/' + id,data)
    .then(res =>{
      this.getHarvests();
    })

  }

  

  render(){
    return (

      <div className="app">
		
      <View viewName="harvests" activeView={this.state.activeView} className="color1">
        <div className="header header-profile">
          <i onClick={()=>this.setActiveView('nav')} className="fas fa-bars"></i>
        </div>

        <div className="user">
          <img className="dan" src="boy.png" alt=""/>
          <div className="user-info">
              <h2 className="name"  >Dan</h2>
              <h2 className="location">Parnell</h2>
          </div>         
        </div>

        <div className="main">
          <h3>Dan's harvests</h3>

          {
            this.state.harvests.map((harvest) => {
              var harvestProps = {
                ...harvest,
                key: harvest.id,
                setActiveView:this.setActiveView,
                setHarvestToUpdate:this.setHarvestToUpdate,
              };
              return (<Harvest {...harvestProps} />)
            })
          }

          
        </div>
      </View>

      <View viewName="add-harvest" activeView={this.state.activeView} className="color2">
        <div className="header">
          <i onClick={()=>this.setActiveView('harvests')} className="fas fa-times"></i>
          <i onClick={()=>this.setActiveView('nav')} className="fas fa-bars"></i>
        </div>
        <div className="main">
          <h3>Add a harvest</h3>

          <form>
                <div className="form-group">
                    <label for="name-input">Name</label>
                    <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter harvest name" />
                </div>
                <div className="form-group">
                    <label for="name-input">Description</label>
                    <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter harvest description" />
                </div>

                <div className="form-group">
                    <label for="name-input">Location/Pick up</label>
                    <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter pick up location" />
                </div>

                <div className="form-group">
                    <label for="name-input">Photo</label>
                    <input type="text" className="form-control" name="photo-input" id="photo-input" value="harvest.jpg" />
                </div>

                <div className="form-group">
                    <label for="type-input">Type</label>
                    <select className="form-control" name="type-input" id="type-input">
                        <option value="1">Fruit</option>
                        <option value="2">Veges</option>
                        <option value="3">Herbs</option>
                        <option value="4">Flowers</option>
                        <option value="5">Misc</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Add</button>
            </form>

        </div>
      </View>

      <View viewName="edit-harvest" activeView={this.state.activeView} className="color3">
        <div className="header">
          <i onClick={()=>this.setActiveView('harvests')} className="fas fa-times"></i>
          <i onClick={()=>this.setActiveView('nav')} className="fas fa-bars"></i>
        </div>
        <div className="main">
          <h3>Edit harvest</h3>

          <EditHarvestForm {...this.state.harvestToUpdate}
          updateHarvests={this.updateHarvests} setActiveView={this.setActiveView}/>
        </div>
      </View>

      <View viewName="nav" activeView={this.state.activeView} className="color4">
        <div class="header">
          <i onClick={()=>this.setActiveView('harvests')} class="fas fa-times"></i>
          <i class="fas fa-bars"></i>
        </div>
        <div class="main">
          <ul class="nav">
            <li><a onClick={()=>this.setActiveView('add-harvest')} href="#">Add a Plant</a></li>
            <li><a onClick={()=>this.setActiveView('edit-harvest')} href="#">Edit My Plants</a></li>
            <li><a onClick={()=>this.setActiveView('harvests')} href="#">My Plant Profile</a></li>
            <li><a href="#">Sign Out</a></li>
          </ul>
        </div>
      </View>
  
      <div className="footer">
        <i><img className="add" src="plus.png" alt=""/></i>
        <img className="header-icon" src="menu.png" alt=""/>
      </div>
  
    </div>

    );
  }
}
  

export default App;
