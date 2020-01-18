import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import RoutedLinkContainer from '../RoutedLinkContainer';


function Header(props:any){
  return (              
    <Navbar bg="dark" variant="dark">        
    <Nav className="mr-auto">
      <RoutedLinkContainer  link="/" displayText="Feed" variant="outline-light"/>
      <RoutedLinkContainer  link="/admin" displayText="Admin" variant="outline-light" />
    </Nav>
    <Nav style={{color:"#fff"}}>
      Developer by: Byron Rosas
    </Nav>
  </Navbar>  
  );
}

export default Header;
