import React, { Component } from 'react'; 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Portfolio.css';



class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
    		config: this.props.config
		}

	}

	render() {
		const { config } = this.state;
		console.log(config);
		return(
			<div className='Portfolio'>
				<Container>
					<div className="grid">
						{

							config ? 
							config.map((el, index) => 
									<Card key={index} className="m-1 m-md-3">
									  <Card.Img variant="top" src={el.image} />
									  <Card.Body>
									    <Card.Title>{el.title}</Card.Title>
									    <Card.Subtitle className="mb-2 text-muted">{`${el.price}€`}</Card.Subtitle>
									    <Card.Text>
									      {el.text}
									    </Card.Text>
									    <Button variant="primary" size="lg" block>Buy it!</Button>
									  </Card.Body>
									</Card>
							) :
							<h1>Loading</h1>

						}
					</div>
			    </Container>
			</div>
			);
	}
}
export default Portfolio;