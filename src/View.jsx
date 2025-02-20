import React, {Component} from 'react';
import './App.css';

class View extends Component {

    render(){

        var {className, children, viewName, activeView} = this.props;
        var newClassName = 'view ' + className

        return (viewName == activeView) ? (
            <div className={newClassName}>
              {children}
            </div>
        ) : null 
    }

}

export default View;