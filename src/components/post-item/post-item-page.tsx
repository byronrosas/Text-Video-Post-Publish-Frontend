import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import RoutedLinkContainer from '../RoutedLinkContainer';

function PostItemPage(props: any) {
	const {
		postItem,
		typeItem,
	} = props;

	return (
		<Fragment>
			<Card border={typeItem === "text" ? "info" : "warning"}>
				<Card.Header>{typeItem}</Card.Header>
				<Card.Body>
					<Card.Title>Title: {postItem.title}</Card.Title>
					{
						typeItem !== "text" ?
							(<ResponsiveEmbed aspectRatio="16by9">
								<iframe width="560" height="315" src={postItem.url} title="video"></iframe>
							</ResponsiveEmbed>) : (<div></div>)
					}
					<Card.Text className="content-trunk">
						Description:
						{postItem.description}
					</Card.Text>
					<RoutedLinkContainer link={'/fullread/'+postItem._id} displayText={'More'} variant={'info'}></RoutedLinkContainer>
				</Card.Body>
			</Card>
		</Fragment>
	);
}
export default PostItemPage;