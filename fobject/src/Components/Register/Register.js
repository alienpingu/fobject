import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			username: ''
		}
	}

	onUsernameChange = (event) => {
		this.setState({ username: event.target.value })
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
				username: this.state.name
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user) {
					console.log(user)
					this.props.onRouteChange('logged')
				}
			})
	}
	render() {
			return (
				<Form>
					<Form.Group controlId="formBasicPassword">
					    <Form.Label>Username</Form.Label>
					    <Form.Control 
					    	type="text" 
					    	placeholder="Enter username" 
					    	onChange={this.onUsernameChange}
					    />
				  	</Form.Group>

				  	<Form.Group controlId="formBasicEmail">
				    	<Form.Label>Email address</Form.Label>
				    	<Form.Control 
				    		type="email" 
				    		placeholder="Enter email" 
				    		onChange={this.onEmailChange}
				    	/>
				    	<Form.Text className="text-muted">
				      	We'll never share your email with anyone else.
				    	</Form.Text>
				  	</Form.Group>

				  	<Form.Group controlId="formBasicPassword">
				    	<Form.Label>Password</Form.Label>
				    	<Form.Control 
				    		type="password" 
				    		placeholder="Password" 
				    		onChange={this.onPasswordChange}
			    		/>
				  	</Form.Group>

				  	<Form.Group controlId="formBasicCheckbox">
				    	<Form.Check type="checkbox" label="Check me out" />
				  	</Form.Group>
				  	<Button 
				  		variant="primary" 
				  		type="submit"
				  		onClick={this.onSubmitSignIn}
			  		>
				    		Submit
				  	</Button>
				</Form>
		);
	}
}


export default Register;