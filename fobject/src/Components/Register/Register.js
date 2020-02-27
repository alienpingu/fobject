import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		}
	}

	onNameChange = (event) => {
		this.setState({ name: event.target.value })
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value })
	} 

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value })
	} 

	onSubmitSignIn = () => {
		fetch('http://localhost:3001/register', {
			method: 'POST',
		    headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		}).then(res => res.status === 200 ? this.props.routeChange('config') : console.log(res))
	}
	render() {
			return (
				<div className="form">

				  	<h3 id="logo">Register</h3>

				  	<label htmlFor="name">Name</label>
				  	<input 
				  		type="text" 
				  		id="name" 
				  		name="name" 
				  		placeholder="Type in your name.." 
				  		autoComplete="off" 
				  		required 
				  		onChange={this.onNameChange}

			  		/>

				  	<label htmlFor="email">E-mail</label>
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
				  	<p className="login" onClick={() => this.props.routeChange('login')}>Log in</p>

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


export default Register;