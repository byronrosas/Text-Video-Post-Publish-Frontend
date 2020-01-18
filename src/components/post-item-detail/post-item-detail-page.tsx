import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

function PostItemDetailPage(props: any) {
	const {
		postItem,
		typeItem
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
					</ResponsiveEmbed>):(<div></div>)
					}
					<Card.Text>
						Description:
						{postItem.description}
					</Card.Text>
				</Card.Body>
			</Card>
		</Fragment>
	);
}
export default PostItemDetailPage;