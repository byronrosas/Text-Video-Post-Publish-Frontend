import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const POST_PUBLISH_ADD = gql`
	mutation PostAdd($post:PostInputs!){
		postAdd(post:$post){
			count		
		}
	}
`;

function CreatePostVideoPage(props: any) {
	const {
		handleSubmit,
		handleChange
	} = props;
	const [addTodo] = useMutation(POST_PUBLISH_ADD);
	return (
		<Card style={{ width: '60rem' }}>
			<Card.Body>
				<Card.Title>Video</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Create and Publish</Card.Subtitle>
				<Card.Text>
					Add a URL only from <strong>youtube</strong> &amp; <strong>vimeo</strong>.
    			</Card.Text>
				<Form onSubmit={(e:any)=> { handleSubmit(addTodo,e)}}>
					<Form.Group controlId="frmUrl">												
						<Form.Control type="url" name="url" onChange={handleChange} required placeholder="Enter url" />
					</Form.Group>
					<Form.Group controlId="frmTitle">																	
						<Form.Control type="text" name="title" onChange={handleChange} required placeholder="Enter Post title" />
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