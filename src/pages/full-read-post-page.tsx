import React, {Fragment} from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PostItemDetailIndex from '../components/post-item-detail/post-item-detail-index';

const POST_PUBLISH_BY_ID = gql`
query
  PostById($id:String!){
    postById(id:$id){
      _id
      title
      description
      url
    }
  }
`;

interface IProps {
  match:any 
}

const FullReadPostPage: React.FC<IProps> = (props) => {
  const { match: { params } } = props;
  const { loading, error, data } = useQuery(POST_PUBLISH_BY_ID, {
    variables: { id:params.id },
  });  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Fragment>
      <h1>DETAIL PAGE</h1>
      <PostItemDetailIndex post={data.postById}></PostItemDetailIndex>
    </Fragment>
  );
};

export default FullReadPostPage;
