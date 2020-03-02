import React, { Component } from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

	return(
		<Navbar className="Navigation" bg="light" expand="lg">
		  <Navbar.Brand href="#home">Fobject</Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  {
		  	this.props.sessionName ? 
	  		  <Navbar.Collapse id="basic-navbar-nav">
	  		    <Nav className="mr-auto">
	  		      <Nav.Link onClick={() => this.props.routeChange('config')} >Config</Nav.Link>
	  		      <Nav.Link onClick={() => this.props.routeChange('render')} >Render</Nav.Link>
	  		      <NavDropdown title="Profile" id="basic-nav-dropdown">
	  		        <NavDropdown.Item onClick={() => this.props.routeChange('profile')} >Setting</NavDropdown.Item>
	  		        <NavDropdown.Divider />
	  		        <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
	  		      </NavDropdown>
	  		    </Nav>
	  		  </Navbar.Collapse>
	  		  :
	  		  null
  		}
		</Navbar>
		);
  }
}

export default Navigation;