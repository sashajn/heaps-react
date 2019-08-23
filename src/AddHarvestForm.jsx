import React, {Component} from 'react';

class  AddHarvestForm extends Component {
    handleFormSubmit = (e) => {
      e.preventDefault();
      var formData = new FormData(this.form);
      var data = {
        name: formData.get('name-input'),
        description:  formData.get('description-input'),
        location: formData.get('location-input')
        // type_id:  formData.get('type-input')
      }
      console.log(data);
      this.props.addHarvests(data);
      this.props.setActiveView('harvests');
    }
    render(){
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
          <input type="text" className="form-control" name="photo-input" id="photo-input" value="harvest.jpg"/>
        </div>

        <div className="form-group">
          <label htmlFor="type-input">Type</label>
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
      );
    }
  }
  
  export default AddHarvestForm;
  