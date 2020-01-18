import React, { Fragment } from 'react';
import CreatePostTextPage from './create-post-text-page';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import addPost from '../../redux/actions/addPost';
interface IState {
	title?: string;
	description?: string;
	isok?: boolean | null;
}

interface IProps {
	addPost?:any;
}

class CreatePostTextIndex extends React.Component<IProps, IState>{
	constructor(props: any) {
		super(props);
		this.state = {
			title: "",
			description: "",
			isok: null
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

	async handleSubmit(addPost: any, event: any) {
		event.preventDefault();
		try {
			const data = await addPost({
				variables: { post: { title: this.state.title, description: this.state.description } }
			});
			console.log(data.data.postAdd.count);
			this.setState({ isok: true });
			this.props.addPost(data.data.postAdd.count);
		} catch (error) {
			this.setState({ isok: false });
			console.log(error);
		}


	}
	render() {
		let alert = <div></div>;
		if (this.state.isok !== null) {
			if (this.state.isok) {
				alert = <Alert key="al1" variant="primary">
							Post Saved and Published
						</Alert>;
			} else {
				alert = <Alert key = "al1" variant = "danger">
							Error : (
						</Alert>;
			}

		}
		return (
			<Fragment>
				{alert}
				<CreatePostTextPage handleSubmit={this.handleSubmit} handleChange={this.handleChange}></CreatePostTextPage>
			</Fragment >
		);
	};
}
const mapDispatchToProps = {
	addPost,
};

export default connect(null, mapDispatchToProps)(CreatePostTextIndex);