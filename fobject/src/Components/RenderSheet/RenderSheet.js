import React, { Component } from 'react'; 


import Portfolio from './Template/Portfolio/Portfolio';
import Rowbyrow from './Template/Rowbyrow/Rowbyrow';


class RenderSheet extends Component {
	constructor(props) {
		super(props);
		this.state = {
    		config: this.props.renderConfig,
    		template: 'rowbyrow'
		}

	}

	render() {
		const { config, template } = this.state;
		return(
			<div className='RenderSheet'>
				{
					template === 'portfolio' ? <Portfolio config={config} /> :
					template === 'rowbyrow' ? <Rowbyrow config={config} /> :
					<h1>Config not found</h1>
				}
			</div>


			);
	}
}
export default RenderSheet;


