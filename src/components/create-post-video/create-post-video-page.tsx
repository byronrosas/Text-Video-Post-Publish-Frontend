import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function CreatePostVideoPage(props: any) {
	const {
		handleSubmit,
		handleChange
	} = props;
	return (
		<Card style={{ width: '20rem' }}>
			<Card.Body>
				<Card.Title>Video</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Create and Publish</Card.Subtitle>
				<Card.Text>
					Add a URL from youtube, vimeo and more.
    			</Card.Text>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="frmUrl">												
						<Form.Control type="url" name="url" onChange={handleChange} placeholder="Enter url" />
					</Form.Group>
					<Form.Group controlId="frmTitle">																	
						<Form.Control type="text" name="title" onChange={handleChange} placeholder="Enter Post title" />
					</Form.Group>
					<Form.Group controlId="frmDescription">												
						<Form.Control type="text" name="description" onChange={handleChange} placeholder="Enter Post description" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Publish
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
}
export default CreatePostVideoPage;