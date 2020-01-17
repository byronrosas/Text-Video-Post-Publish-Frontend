import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import NavItem from 'react-bootstrap/NavItem';
import Button from 'react-bootstrap/Button';



function RoutedLinkContainer(props:any) {
  return (
    <LinkContainer to={props.link}>      
      <NavItem><Button style={{ marginRight: '12px' }} variant="outline-light">{props.displayText}</Button></NavItem>
    </LinkContainer>
  );
}

export default RoutedLinkContainer;