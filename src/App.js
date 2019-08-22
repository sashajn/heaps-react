import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (

      <div className="app">
		
      <div className="view color1 active">
  
        <div className="user">
          <img className="dan" src="boy.png" alt=""/>
          <div className="user-info">
              <h2 className="name">Dan</h2>
              <h2 className="location">Parnell</h2>
  
          </div>
          
        </div>


        <div className="main">
          <h3>Dan's harvests</h3>
          <div className="card harvest">
            <img className="card-img-top" src="plant.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h4 className="card-location">Location</h4>
              <p className="card-text">Some quick example text to build on the card title</p>
              <p>
                <i className="fas fa-heart"></i>
                <i className="fas fa-edit"></i>
                <i className="fas fa-trash"></i>
              </p>
           
            </div>
          </div>
  
        </div>
      </div>
      <div className="view color2">
        <div className="header"><i className="fas fa-times"></i></div>
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
      </div>

      <div className="view color2">
        <div className="header"><i className="fas fa-times"></i></div>
        <div className="main">
          <h3>Edit harvest</h3>

          <form>
            <div className="form-group">
              <label for="name-input">Name</label>
              <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter harvest name"/>
            </div>
            <div className="form-group">
              <label for="name-input">Description</label>
              <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter harvest description"/>
            </div>
  
            <div className="form-group">
              <label for="name-input">Location/Pick up</label>
              <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter pick up location"/>
            </div>
            
            <div className="form-group">
              <label for="name-input">Photo</label>
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
            
        </div>
      </div>

      <div className="view color3">
        <div className="header"><i className="fas fa-times"></i></div>
        <div className="main">
          <h2>Update harvests</h2>
        
        </div>
      </div>
      <div className="view color4">
        <div className="header"><i className="fas fa-times"></i></div>
        <div className="main">
          <h3>Login</h3>
          <form>
            <div className="form-group">
              <label for="name-input">Username</label>
              <input type="text" className="form-control" nam="username-input" id="username-input" placeholder="Enter username"/>
            </div>
  
            <div className="form-group">
              <label for="name-input">Password</label>
              <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Enter password"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
      <div className="view color5">
        <div className="header"><i className="fas fa-times"></i></div>
        <div className="main">
          <h3>Signup</h3>
          <form>
            <div className="form-group">
              <label for="name-input">Username</label>
              <input type="text" className="form-control" name="username-input" id="username-input" placeholder="Enter username"/>
            </div>
  
            <div className="form-group">
              <label for="name-input">Password</label>
              <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Enter password"/>
            </div>
  
            <div className="form-group">
              <label for="name-input">Email</label>
              <input type="email" className="form-control" name="email-input" id="email-input" placeholder="Enter email"/>
            </div>
  
            <div className="form-group">
              <label for="name-input">Intro</label>
              <input type="text" className="form-control" name="intro-input" id="intro-input" placeholder="Enter introduction"/>
            </div>
  
            <button type="submit" className="btn btn-primary">Join</button>
          </form>
        </div>
      </div>
      <div className="view color0">
        <div className="header"><i className="fas fa-times"></i></div>
        <div className="main">
          <ul className="menu">
            <li><a className="color1" href="">harvests</a></li>
            <li><a className="color2" href="">Add a harvest</a></li>
            <li><a className="color4" href="">Login</a></li>
            <li><a className="color5" href="">Signup</a></li>
          </ul>
        </div>
      </div>
  
      <div className="footer">
        <i><img className="add" src="plus.png" alt=""/></i>
        <img className="header-icon" src="menu.png" alt=""/>
      </div>
  
    </div>

    );
  }
}
  

export default App;
