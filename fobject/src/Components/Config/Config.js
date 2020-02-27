import React from 'react';

class Config extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			config: ''
		}
	}

	onLinkChange = (event) => {
		let id = event.target.value.split('/')[5];
		id.length === 44 ? 
			fetch(`http://192.168.1.130:3001/convert/${id}`, {
		          method: 'GET',
		          headers: {'Content-Type': 'application/json'}
		        })
			.then(response => response.json())
			.then(sheetObj =>  this.setState({config: sheetObj}))
			.catch(err => console.log(err))
			: console.log('Insert valid link')
		}

	

	render() {
			return (
				<div className="form">

				  	<h3 id="logo">Config</h3>

				  	<label htmlFor="spreadsheet">Spreadsheet</label>
				  	<input 
				  		type="link" 
				  		id="link" 
				  		name="spreadsheet" 
				  		placeholder="Copy your spreadsheet's link" 
				  		autoComplete="off" 
				  		required 
				  		onChange={this.onLinkChange}

			  		/>
				  	<input 
				  		className="connect"
					  	type="submit" 
					  	name="submit" 
					  	value="Connect!" 
					  	onClick={() => this.props.updateConfig(this.state.config) }
				  	/>

				</div>
		);
	}
}


export default Config;