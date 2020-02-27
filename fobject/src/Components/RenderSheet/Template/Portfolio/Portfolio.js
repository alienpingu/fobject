import React, { Component } from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';





class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
    		config: this.props.renderConfig
		}

	}

	render() {
		const { config } = this.state;
		return(
			<div className='Portfolio'>
				<Navbar bg="dark" expand="lg">
				  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">
				      <Nav.Link href="#home">Home</Nav.Link>
				      <Nav.Link href="#link">Link</Nav.Link>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>
				<Container>
					<Carousel>
					  <Carousel.Item>
					    <img
					      className="d-block w-100"
					      src="https://picsum.photos/seed/adns/800/400"
					      alt="First slide"
					    />
					    <Carousel.Caption>
					      <h3>First slide label</h3>
					      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					  <Carousel.Item>
					    <img
					      className="d-block w-100"
					      src="https://picsum.photos/seed/sda/800/400"
					      alt="Third slide"
					    />

					    <Carousel.Caption>
					      <h3>Second slide label</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					  <Carousel.Item>
					    <img
					      className="d-block w-100"
					      src="https://picsum.photos/seed/erfg/800/400"
					      alt="Third slide"
					    />

					    <Carousel.Caption>
					      <h3>Third slide label</h3>
					      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					</Carousel>
					<h1 className="text-center">Our Team</h1>
					<Row className="text-center">

						<Col xs={12} md={4}>
					      <Image className="bg-light m-3" src="https://robohash.org/qnda" roundedCircle />
					      	<Card className="text-center">
							  	<Card.Header>Featured</Card.Header>
							  	<Card.Body>
							    	<Card.Title>Special title treatment</Card.Title>
							    	<Card.Text>
							      		With supporting text below as a natural lead-in to additional content.
							    	</Card.Text>
						    		<Button variant="primary">Go somewhere</Button>
							  	</Card.Body>
							  <Card.Footer className="text-muted">2 days ago</Card.Footer>
							</Card>
					    </Col>
					    <Col xs={12} md={4}>
					      <Image className="bg-light m-3" src="https://robohash.org/adwe" roundedCircle />
					      <Card className="text-center">
							  	<Card.Header>Featured</Card.Header>
							  	<Card.Body>
							    	<Card.Title>Special title treatment</Card.Title>
							    	<Card.Text>
							      		With supporting text below as a natural lead-in to additional content.
							    	</Card.Text>
						    		<Button variant="primary">Go somewhere</Button>
							  	</Card.Body>
							  <Card.Footer className="text-muted">2 days ago</Card.Footer>
							</Card>
					    </Col>
					    <Col xs={12} md={4}>
					      <Image className="bg-light m-3" src="https://robohash.org/21qw" roundedCircle />
					      <Card className="text-center">
							  	<Card.Header>Featured</Card.Header>
							  	<Card.Body>
							    	<Card.Title>Special title treatment</Card.Title>
							    	<Card.Text>
							      		With supporting text below as a natural lead-in to additional content.
							    	</Card.Text>
						    		<Button variant="primary">Go somewhere</Button>
							  	</Card.Body>
							  <Card.Footer className="text-muted">2 days ago</Card.Footer>
							</Card>
					    </Col>
				    </Row>
			    </Container>
			</div>
			);
	}
}
export default Portfolio;