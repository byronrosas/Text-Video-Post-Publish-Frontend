import React from 'react';
import CreatePostTextPage from './create-post-text-page';
import { Textobj } from '../../models/textobj';
interface IState {
	objtext:Textobj;
}
class CreatePostTextIndex extends React.Component<{}, IState>{
	defaultText: Textobj;
	constructor(props) {
		super(props);
		this.defaultText = {
			title: "",
			description: ""
		}
		this.state = {
			objtext: this.defaultText
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const nameInput = event.target.name;
		this.defaultText[nameInput] = event.targe.value;
		this.setState({ objtext: this.defaultText });
	}

	handleSubmit(event) {
		event.preventDefault();
		// fetch to API 
		console.log(this.state.objtext);
	}
	render() {
		return (
			<CreatePostTextPage  handleSubmit={this.handleSubmit}></CreatePostTextPage>
		);
	};
}

export default CreatePostTextIndex;