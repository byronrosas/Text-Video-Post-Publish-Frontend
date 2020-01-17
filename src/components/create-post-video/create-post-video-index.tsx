import React from 'react';
import CreatePostVideoPage from './create-post-video-page';

interface IState {
	url?: string,
	title?: string,
	description?: string
}
class CreatePostVideoIndex extends React.Component<{}, IState> {

	constructor(props: any) {
		super(props);
		this.state = {
			url: "",
			title: "",
			description: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event: any) {
		const target = event.target;
		let nameInput = target.name;
		this.setState({
			[nameInput]: target.value
		});
	}

	handleSubmit(event: any) {
		event.preventDefault();
		// fetch to API 
		console.log(this.state);
	}
	render() {
		return (
			<CreatePostVideoPage handleSubmit={this.handleSubmit} handleChange={this.handleChange}></CreatePostVideoPage>
		);
	};
}

export default CreatePostVideoIndex;