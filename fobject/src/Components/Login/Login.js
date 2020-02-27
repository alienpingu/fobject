import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value })
	} 

	onSubmitSignIn = () => {
		fetch('http://localhost:3001/login', {
			method: 'POST',
		    headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				password: this.state.password,
				email: this.state.email
			})
		}).then(res => res.status === 200 ? 
						this.props.routeChange('config') : 
						console.log(res))
		
	}
	render() {
			return (
				<div className="form">

				  	<h3 id="logo">Log in</h3>

				  	<label htmlFor="email">E- mail</label>
				  	<input 
				  		type="text" 
				  		id="email" 
				  		name="email" 
				  		placeholder="Type in your email.." 
				  		autoComplete="off" 
				  		required 
				  		onChange={this.onEmailChange}

			  		/>


				 	 <label htmlFor="password">Password</label>
				 		<input 
						  	type="password" 
						  	id="password" 
						  	name="password" 
						  	placeholder="Enter your password.." 
						  	autoComplete="off" 
						  	required 
						  	onChange={this.onPasswordChange}
				  		/>

				  	<p className="forgot">Forgot Password?</p>
				  	<p className="register" onClick={() => this.props.routeChange('register')} >Register</p>

				  	<input 
					  	type="submit" 
					  	name="submit" 
					  	value="Log In" 
					  	onClick={this.onSubmitSignIn}
				  	/>

				</div>
		);
	}
}


export default Login;