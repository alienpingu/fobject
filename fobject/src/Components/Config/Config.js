import React from 'react';
import './Config.css';

class Config extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			config: '',
			template: ''
		}
	}

	onLinkChange = (event) => {
		let id = event.target.value.split('/')[5];
		id.length === 44 ? 
			fetch(`http://localhost:3001/convert/${id}`, {
		          method: 'GET',
		          headers: {'Content-Type': 'application/json'}
		        })
			.then(response => response.json())
			.then(sheetObj =>  this.setState({config: sheetObj}))
			.catch(err => console.log(err))
			: console.log('Insert valid link')
		}
	changeTemplate = (style) => {
		this.setState({template: style})
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
			  		<div class="cntr">
					    <label for="rdo-1" class="btn-radio" onClick={() => this.changeTemplate('rowbyrow')}>
					      <input type="radio" id="rdo-1" name="radio-grp" />
					      <svg width="20px" height="20px" viewBox="0 0 20 20">
					        <circle cx="10" cy="10" r="9"></circle>
					        <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" class="inner"></path>
					        <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" class="outer"></path>
					      </svg>
					      <span>Row By Row</span>
					    </label>
					    <label for="rdo-2" class="btn-radio" onClick={() => this.changeTemplate('portfolio')}>
					      <input type="radio" id="rdo-2" name="radio-grp" />
					      <svg width="20px" height="20px" viewBox="0 0 20 20">
					        <circle cx="10" cy="10" r="9"></circle>
					        <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" class="inner"></path>
					        <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" class="outer"></path>
					      </svg>
					      <span>E-Commerce</span>
					    </label>
					  </div>
				  	<input 
				  		className="connect"
					  	type="submit" 
					  	name="submit" 
					  	value="Connect!" 
					  	onClick={() => this.props.updateConfig(this.state.config,this.state.template) }
				  	/>

				</div>
		);
	}
}


export default Config;