import React, { Fragment } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import PostItemIndex from '../post-item/post-item-index';
import { Post } from '../../models/post';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import RoutedLinkContainer from '../RoutedLinkContainer';

const POST_PUBLISH_GET = gql`
  {
    postList {
      _id
      title
      url
      description
    }
  }
`;
function ListPage(props: any) {
	const { refreshQuery } = props;
	const { loading, error, data, refetch } = useQuery(POST_PUBLISH_GET);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	refreshQuery(refetch);
	return (
		<Fragment>
			<h1>FEED PAGE - Post List</h1>

			<ListGroup>
				{
					data.postList.length !== 0 ?
						data.postList.map((post: Post) => (
							<ListGroup.Item key={post._id}>
								<PostItemIndex post={post}></PostItemIndex>
							</ListGroup.Item>
						))
						: (
							<Card>
								<Card.Body>
									There are no publications created.
									<RoutedLinkContainer link={'/admin'} displayText={'create one now'} variant={'info'}></RoutedLinkContainer>
								</Card.Body>
							</Card>
						)
				}
			</ListGroup>

		</Fragment>
	);
}
export default ListPage;