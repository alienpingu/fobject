import React, { Component } from 'react'; 
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import './Rowbyrow.css';



class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
    		config: this.props.config
		}

	}

	render() {
		const { config } = this.state;
		return(
			<div className="rowbyrow">
				{config.map((el, index) => 
					<Card key={index}>
				  		<Card.Header>{el.StudentName}</Card.Header>
				  		<ListGroup variant="flush">
					    	<ListGroup.Item>{el.Gender}</ListGroup.Item>
					    	<ListGroup.Item>{el.ClassLevel}</ListGroup.Item>
					    	<ListGroup.Item>{el.HomeState}</ListGroup.Item>
					    	<ListGroup.Item>{el.Major}</ListGroup.Item>
					    	<ListGroup.Item>{el.ExtracurricularActivity}</ListGroup.Item>
				  		</ListGroup>
					</Card>)
				}
			</div>
			
			)
	}
}
export default Portfolio;