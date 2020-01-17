import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

function PostItemPage(props: any) {
	const {
		postItem,
		typeItem
	} = props;
	return (
		<Fragment>
			<Card border={typeItem == "text" ? "info" : "warning"}>
				<Card.Header>{typeItem}</Card.Header>
				<Card.Body>
					<Card.Title>{postItem.title}</Card.Title>
					{
					typeItem !== "text" ?
					(<ResponsiveEmbed aspectRatio="16by9">
						<iframe width="560" height="315" src={postItem.url}></iframe>
					</ResponsiveEmbed>):({})
					}
					<Card.Text className="content-trunk">
						{postItem.description}
					</Card.Text>
					<Button variant="primary">More</Button>
				</Card.Body>
			</Card>
		</Fragment>
	);
}
export default PostItemPage;