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
        }
        var {updateHarvests,id,setActiveView} = this.props;
        updateHarvests(id,data);
        setActiveView('harvests');
    }
     render()
     {
        var {name,description} = this.props;
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
              <label or="name-input">Photo</label>
              <input type="text" className="form-control" name="photo-input" id="photo-input" value="harvest.jpg"/>
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
            
         )
     }
 }

 export default EditHarvestForm;