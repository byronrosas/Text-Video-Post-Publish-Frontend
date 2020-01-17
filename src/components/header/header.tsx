import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import RoutedLinkContainer from '../RoutedLinkContainer';


function Header(props:any){
  return (              
    <Navbar bg="dark" variant="dark">        
    <Nav className="mr-auto">
      <RoutedLinkContainer  link="/" displayText="Feed"/>
      <RoutedLinkContainer  link="/admin" displayText="Admin" />
    </Nav>
  </Navbar>  
  );
}

export default Header;
