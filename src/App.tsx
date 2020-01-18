import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Page from './pages/page';
import Header from './components/header/header';
import { ApolloProvider } from '@apollo/react-hooks';

import ApolloClient from 'apollo-boost';

const baseURL = process.env.REACT_APP_API_URL;
const client = new ApolloClient({
  uri: baseURL,
});


const App: React.FC = () => {

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Page />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
