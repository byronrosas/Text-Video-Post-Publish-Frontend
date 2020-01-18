import React, { Fragment } from 'react';
import CreateIndex from '../components/create/create-index';

const AdminPage: React.FC = (props) => {

  return (    
    <Fragment>
      <h1>Create &amp; Publish</h1>
      <div className="center">
        <CreateIndex></CreateIndex>
      </div>      
    </Fragment>
  );
};

export default AdminPage;
