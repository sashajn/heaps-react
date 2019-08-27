import React, {Component} from 'react';
import { types } from '@babel/core';

class  AddHarvestForm extends Component {

  handleFormSubmit = (e) => {
		e.preventDefault();

		var {uploadFile,addHarvests,setActiveView} = this.props;

		var formData = new FormData(this.form);

		uploadFile(formData).then(res => {
			var fileName = res.data;

			var data = {
				name:formData.get('name-input'),
        description:formData.get('description-input'),
        location:formData.get('location-input'),
				photo: fileName,
				type_id:formData.get('type-input')
			}
			addHarvests(data)
			setActiveView('harvests')

		})

  } 
  
    render(){
      var {types} = this.props;
      return (
        <form onSubmit={this.handleFormSubmit} ref={(el)=>{this.form = el}}>
        <div className="form-group">
          <label htmlFor="name-input">Name</label>
          <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter harvest name"/>
        </div>
        <div className="form-group">
          <label htmlFor="name-input">Description</label>
          <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter harvest description"/>
        </div>

        <div className="form-group">
          <label htmlFor="name-input">Location/Pick up</label>
          <input type="text" className="form-control" name="location-input" id="location-input" placeholder="Enter pick up location"/>
        </div>

        <div className="form-group">
	          <label htmlFor="name-input">Photo</label>
	          <input type="file" className="form-control" name="photo-input" id="photo-input"/>
	        </div>

        <div className="form-group">
          <label htmlFor="type-input">Type</label>
          <select className="form-control" name="type-input" id="type-input">
            
            {types.map(type=><option value={type.id}>{type.name}</option>)}

          </select>
        </div>

        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      );
    }
  }
  
  export default AddHarvestForm;
  