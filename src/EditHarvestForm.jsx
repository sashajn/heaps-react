import React,{Component} from 'react';
import './App.css';

 class EditHarvestForm extends Component{
     constructor(props)
     {
         super(props);
     }
     handelFormSubmit = (e) =>
    {
        e.preventDefault();
        
        var formData = new FormData(this.form);//FormData() is part of dom we get all data from form
        var data = {
            name:formData.get('name-input'),
            description:formData.get('description-input'),
            type_id:formData.get('type-input'),
        }
        var {updateHarvests,id,setActiveView} = this.props;
        updateHarvests(id,data);
        setActiveView('harvests');
    }
     render()
     {
        var {name,description, types, type_id} = this.props;
         return(
            <form onSubmit={this.handelFormSubmit} 
            ref={(el) =>{this.form = el}}>
            <div className="form-group">
              <label or="name-input">Name</label>
              <input type="text" className="form-control" name="name-input" id="name-input"  defaultValue={name}/>
            </div>
            <div className="form-group">
              <label or="name-input">Description</label>
              <input type="text" className="form-control" name="description-input" id="description-input" defaultValue={description}/>
            </div>
  
            <div className="form-group">
              <label or="name-input">Location/Pick up</label>
              <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter pick up location"/>
            </div>            
  
            <div className="form-group">
              <label for="type-input">Type</label>
              <select className="form-control" name="type-input" id="type-input" value={type_id}>

                {types.map(type=><option value={type.id}>{type.name}</option>)}
                
         
              </select>
            </div>
  
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
            
         )
     }
 }

 export default EditHarvestForm;