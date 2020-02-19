import React, { Component } from 'react'; 
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

class RenderSheet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '1yPfM_9IOkVit458eROA6mKlVtFqewt3WD1zyeqCtBvg',
    		config:''
		}

		
	}
	
	readSheet = () => {
			fetch(`http://localhost:3001/convert/${this.state.id}`, {
		          method: 'GET',
		          headers: {'Content-Type': 'application/json'}
		        })
				.then(response => response.json())
				.then(sheetObj =>  this.setState({config: sheetObj}))
				.catch(err => console.log(err))
	}

	render() {
		const { config } = this.state;
		return(
			<div className='RenderSheet'>
				{config ? config.map((el, index) => 
					<Card key={index}>
					  	<Card.Header>{el.StudentName}</Card.Header>
					  	<ListGroup variant="flush">
					    	<ListGroup.Item>{el.Gender}</ListGroup.Item>
					    	<ListGroup.Item>{el.ClassLevel}</ListGroup.Item>
					    	<ListGroup.Item>{el.HomeState}</ListGroup.Item>
					    	<ListGroup.Item>{el.Major}</ListGroup.Item>
					    	<ListGroup.Item>{el.ExtracurricularActivity}</ListGroup.Item>
					  	</ListGroup>
					</Card>) : this.readSheet()}
			</div>


			);
	}
}
export default RenderSheet;


