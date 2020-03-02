import React, { Component } from 'react'; 
import './App.css';
import RenderSheet from './Components/RenderSheet/RenderSheet';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Config from './Components/Config/Config';
import Navigation from './Components/Navigation/Navigation';
import Profile from './Components/Profile/Profile';


import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	route: 'register',
      config: '',
      template:'',
      session:''
    }
  }

  routeChange = (route) => {
    this.setState({route: route})
  }
  updateConfig = (config, template) =>  {
    this.setState({config: config})
    this.setState({template: template})
    this.routeChange('render');
  }
  updateSession = (user, route) => {
    this.setState({session: user});
    this.routeChange(route);
  }
  
  render() {
  	const { route, config, template, session } = this.state;
	return(
		<div className='App'>
      <Navigation sessionName={session} routeChange={this.routeChange} />
			{
        route === 'register' ? <Register routeChange={this.routeChange} updateSession={this.updateSession}/> 
        :
        route === 'login' ? <Login routeChange={this.routeChange} updateSession={this.updateSession}/> 
        :
        route === 'config' ? <Config session={session} routeChange={this.routeChange} updateConfig={this.updateConfig} />
        : 
        route === 'render' ? <RenderSheet renderConfig={config} renderTemplate={template} />
        :
        route === 'profile' ? <Profile routeChange={this.routeChange}/> 
        :
        <h1>Invalid Route</h1>
      }
		</div>
		);
  }
}

export default App;
