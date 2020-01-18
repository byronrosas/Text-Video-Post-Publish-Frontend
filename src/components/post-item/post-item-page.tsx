import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import RoutedLinkContainer from '../RoutedLinkContainer';

function PostItemPage(props: any) {
	const {
		postItem,
		typeItem,
		formatVideo
	} = props;

	return (
		<Fragment>
			<Card border={typeItem === "text" ? "info" : "warning"}>
				<Card.Header>{typeItem}</Card.Header>
				<Card.Body>
					<Card.Title>Title: {postItem.title}</Card.Title>
					{
						typeItem !== "text" ?
							(
								<div className="center">
									<iframe width="560" height="315" src={formatVideo(postItem.url)} title="video"></iframe>
								</div>
								
							) : (<div></div>)
					}
					<Card.Text className="content-trunk">
						Description:
						{postItem.description}
					</Card.Text>
					<RoutedLinkContainer link={'/fullread/' + postItem._id} displayText={'More'} variant={'info'}></RoutedLinkContainer>
				</Card.Body>
			</Card>
		</Fragment>
	);
}
export default PostItemPage;