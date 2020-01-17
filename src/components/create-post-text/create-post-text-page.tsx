import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function PostItemPage(props: any) {
	// const {
	// 	handleSubmit,
	// 	handleChange
	// } = props;
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Create and Publish</Card.Subtitle>
				<Card.Text>
					Selecting the Post Type: Text or Video that will be published.
    			</Card.Text>
				<Form>
					<Form.Group controlId="frmTitle">						
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control type="url" placeholder="Enter url" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Publish
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
}
export default PostItemPage;