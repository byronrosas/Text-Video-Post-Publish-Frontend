import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import AdminPage from './admin-page';
import FeedPage from './feed-page';
import FullReadPostPage from './full-read-post-page';

const Page: React.FC = () => {
  return (                
          <Switch>
            <Redirect exact from="/" to="/feed" />
            <Route path="/feed" component={FeedPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/fullread/:id" component={FullReadPostPage} />
          </Switch>            
  );
}

export default Page;
