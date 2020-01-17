import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function CreatePage(props: any) {
	const {		
		handleChange
	} = props;
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>Admin</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Create and Publish</Card.Subtitle>
				<Card.Text>
					Selecting the Post Type: Text or Video that will be published.
    			</Card.Text>
				<Form>
					<Form.Label>Select Type</Form.Label>
					<Form.Control as="select" onChange={handleChange}>
						<option value="text">Text</option>
						<option value="video">Video</option>
					</Form.Control>
				</Form>
			</Card.Body>
		</Card>
	);
}
export default CreatePage;