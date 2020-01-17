import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import './App.css';
import Page from './pages/page';
import Header from './components/header/header';


const App: React.FC = () => {
  return (
    <Provider store={store}>      
      <BrowserRouter>        
        <Header />
        <Page />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
