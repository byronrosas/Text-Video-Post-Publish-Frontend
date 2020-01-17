import React, { Fragment } from 'react';
import CreatePage from './create-page';
import CreatePostTextIndex from '../create-post-text/create-post-text-index';
import CreatePostVideoIndex from '../create-post-video/create-post-video-index';

class CreateIndex extends React.Component {
	constructor(props: any) {
		super(props);

		this.state = this.state = {
			value: ""
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event: any) {
		this.setState({ value: event.target.value })
	}

	render() {
		return (
			<Fragment>
				<CreatePage handleChange={this.handleChange}></CreatePage>
				{
					this.state == "text" ?
						(<CreatePostTextIndex></CreatePostTextIndex>)
						:
						(<CreatePostVideoIndex></CreatePostVideoIndex>)
				}
			</Fragment>
		);
	};
}

export default CreateIndex;