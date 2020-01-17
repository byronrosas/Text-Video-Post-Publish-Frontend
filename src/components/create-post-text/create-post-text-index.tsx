import React from 'react';
import CreatePostTextPage from './create-post-text-page';

interface IState {
	title?:string;
	description?:string;
}
class CreatePostTextIndex extends React.Component<{}, IState>{
	
	constructor(props:any) {
		super(props);					
		this.state = {
			title:"",
			description:""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);		
	}

	handleChange(event:any) {
		const target = event.target;
		let  nameInput = target.name;		
		this.setState({
			[nameInput]:target.value
		});				
	}

	handleSubmit(event:any) {
		event.preventDefault();
		// fetch to API 
		console.log(this.state);
	}
	render() {
		return (
			<CreatePostTextPage  handleSubmit={this.handleSubmit} handleChange={this.handleChange}></CreatePostTextPage>
		);
	};
}

export default CreatePostTextIndex;