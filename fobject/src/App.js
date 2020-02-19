import React, { Component } from 'react'; 
import './App.css';
import RenderSheet from './Components/RenderSheet/RenderSheet';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	route: 'login'
    }
  }

  
  render() {
  	const { route } = this.state;
	return(
		<div className='App'>
			{route === 'register' ? <Register /> : route === 'login' ? <Login /> : route === 'logged' ?
				<RenderSheet /> : <h1>Invalid Route</h1>}
		</div>
		);
  }
}

export default App;
