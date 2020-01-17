import React from 'react';
// import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Button from 'react-bootstrap/Button';

import { LinkContainer } from 'react-router-bootstrap';
import AdminPage from './pages/admin-page';
import FeedPage from './pages/feed-page';
import FullReadPostPage from './pages/full-read-post-page';

import './App.css';


const App: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/feed">
            <NavItem><Button style={{ marginRight: '12px' }} variant="outline-light">Feed</Button></NavItem>
          </LinkContainer>                      
          <LinkContainer to="/admin">
            <NavItem><Button style={{ marginRight: '12px' }} variant="outline-light">Admin</Button></NavItem>
          </LinkContainer>                    
        </Nav>
      </Navbar>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/feed" />
            <Route path="/feed" component={FeedPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/fullread/:id" component={FullReadPostPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
