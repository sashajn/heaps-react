import React, {Component} from 'react';
import Harvest from './Harvest.jsx';
import View from './View.jsx';
import EditHarvestForm from './EditHarvestForm.jsx';
import AddHarvestForm from './AddHarvestForm.jsx'
import axios from 'axios';
import './App.css';

var urlPrefix = 'http://10.2.24.43:4001/api'

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
      images: [],
      currentType:null,
      harvestToUpdate:null,

    }
  }

  setActiveView = (view) => {
    this.setState({ activeView: view });
  }


  setCurrentType =(id) =>{

    var foundType = this.state.types.find((type)=>{
      return type.id == id;
    });
    foundType ? this.setState({currentType:foundType}): this.setState({currentType:null})
    ;
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

  getTypes =()=>{
    axios.get (urlPrefix + '/types')
    .then(res => {
      this.setState({types:res.data});
    })
  }


  addHarvests =(data)=>{
    axios.post(urlPrefix + '/harvests',data)
    .then(res => {
      this.getHarvests();
    }) 
  }

  deleteHarvests =(id)=>{
    axios.delete(urlPrefix + '/harvests/'+ id)
    .then(res =>{
      this.getHarvests();
    })

  }

  updateHarvests =(id,data)=>{
    axios.put(urlPrefix + '/harvests/' + id,data)
    .then(res =>{
      this.getHarvests();
    })

  }

  componentDidMount(){
    this.getHarvests ();
    this.getTypes();
  }
  
  updateHarvests =(id,data)=>{
    axios.put(urlPrefix + '/harvests/' + id,data)
    .then(res =>{
      this.getHarvests();
    })

  }

  handleHarvestTypeClick =(e) =>{
    var link = e.target;

    this.setCurrentType(link.dataset.type);
    this.setActiveView('harvests');

  }


  uploadFile = (formData) => {

    // you get back a promis - show you later
    var settings = { headers: {'Content-Type': 'multipart/form-data' }}
    return axios.post(urlPrefix+'/upload',formData,settings)

  }
  


  render(){

    var {currentType, harvests}=this.state;

    if(currentType){
      harvests = harvests.filter(harvest => {
        return harvest.type_id == currentType.id
      })

    }
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
            harvests.map((harvest) => {
              var harvestProps = {
                ...harvest,
                key: harvest.id,
                setActiveView:this.setActiveView,
                setHarvestToUpdate:this.setHarvestToUpdate,
                deleteHarvests:this.deleteHarvests
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

          <AddHarvestForm uploadFile={this.uploadFile} addHarvests={this.addHarvests} types={this.state.types} setActiveView={this.setActiveView}/>

        </div>
      </View>

      <View viewName="edit-harvest" activeView={this.state.activeView} className="color3">
        <div className="header">
          <i onClick={()=>this.setActiveView('harvests')} className="fas fa-times"></i>
          <i onClick={()=>this.setActiveView('nav')} className="fas fa-bars"></i>
        </div>
        <div className="main">
          <h3>Edit harvest</h3>

          <EditHarvestForm {...this.state.harvestToUpdate} types={this.state.types}
          updateHarvests={this.updateHarvests} setActiveView={this.setActiveView} uploadFile={this.uploadFile}/>
        </div>
      </View>

      <View viewName="nav" activeView={this.state.activeView} className="color4">
        <div className="header">
          <i onClick={()=>this.setActiveView('harvests')} className="fas fa-times"></i>
          <i className="fas fa-bars"></i>
        </div>
        <div className="main">
          <ul className="nav">
            <li><a onClick={()=>this.setActiveView('add-harvest')} href="#">Add a Plant</a></li>
            
            <li><a onClick={()=>this.setActiveView('edit-harvest')} href="#">Edit My Plants</a></li>
            <li><a data-type = 'null' onClick ={this.handleHarvestTypeClick} href="#">Harvests</a></li>
            {
              this.state.types.map(type =>{
                return (
                <li><a data-type = {type.id} href="#" className="color1" onClick ={this.handleHarvestTypeClick}>{type.name}</a></li>
                )
              })
            }
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
