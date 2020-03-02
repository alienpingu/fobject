import React from 'react'; 

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			password: '',
			name: '',
			trust: false
		}
	}

	onNameChange = (event) => {
		event.target.value ? 
		this.setState({ name: event.target.value })
		:
		this.setState({ name: '' })
	}

	onPasswordChange = (event) => {
		event.target.value ?
		this.setState({ password: event.target.value })
		:
		this.setState({ password: '' })
	} 
	onPasswordRepeatChange = (event) => {
		event.target.value === this.state.password ?
		this.setState({trust: true}) 
		: 
		this.setState({trust: false})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3001/register', {
			method: 'POST',
		    headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				password: this.state.password,
				name: this.state.name
			})
		}).then(res => res.status === 200 ? this.props.routeChange('config') : console.log(res))
	}
	render() {
			return (
				<div className="form">

				  	<h3 id="logo">Profile</h3>

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
				  		<label htmlFor="password">Repeat Password</label>
				 		<input 
						  	type="password" 
						  	id="password" 
						  	name="password" 
						  	placeholder="Enter your password.." 
						  	autoComplete="off" 
						  	required 
						  	onChange={this.onPasswordRepeatChange}
				  		/>

				  	<input 
					  	type="submit" 
					  	name="submit" 
					  	value="Save changes" 
					  	onClick={() => this.state.trust ? this.onSubmitSignIn : console.log('Click but not trust')}
				  	/>

				</div>
		);
	}
}


export default Profile;