import React from 'react';
import CreatePostVideoPage from './create-post-video-page';
import { Video } from '../../models/video';

interface IState{
	objvideo:Video;
}
class CreatePostVideoIndex extends React.Component<{},IState> {
	defaultVideo:Video;
	constructor(props) {
		super(props);
		this.defaultVideo = {
			url: "",
			title: "",
			description: ""
		}
		this.state = {
			objvideo: this.defaultVideo
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const nameInput = event.target.name;
		this.defaultVideo[nameInput] = event.targe.value;
		this.setState({objvideo:this.defaultVideo});
	}

	handleSubmit(event) {
		event.preventDefault();
		// fetch to API 
		console.log(this.state.objvideo);
	}

	render() {
		return (
			<CreatePostVideoPage handleSubmit={this.handleSubmit}></CreatePostVideoPage>
		);
	};
}

export default CreatePostVideoIndex;