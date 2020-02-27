import React, { Component } from 'react'; 
import './App.css';
import RenderSheet from './Components/RenderSheet/RenderSheet';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Config from './Components/Config/Config';

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	route: 'register',
      config: ''
    }
  }

  routeChange = (route) => {
    this.setState({route: route})
  }
  updateConfig = (config) =>  {
    this.setState({config: config})
    this.routeChange('render');
  }
  
  render() {
  	const { route } = this.state;
	return(
		<div className='App'>
			{
        route === 'register' ? <Register routeChange={this.routeChange}/> 
        :
        route === 'login' ? <Login routeChange={this.routeChange}/> 
        :
        route === 'config' ? <Config routeChange={this.routeChange} updateConfig={this.updateConfig} />
        : 
        route === 'render' ? <RenderSheet renderConfig={this.state.config} />
        :
        <h1>Invalid Route</h1>
      }
		</div>
		);
  }
}

export default App;
