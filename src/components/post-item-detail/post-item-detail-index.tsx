import React from 'react';
import PostItemDetailPage from './post-item-detail-page';
import { Post } from '../../models/post';
interface IProps {
	post:Post
}
class PostItemDetailIndex extends React.Component<IProps, {}> {


	render() {
		let postItem = this.props.post;
		let typeItem = "text";
		if (postItem.url !== undefined) {
			if(postItem.url != null)
			{
				typeItem = "video";
			}			
		}
		return (
			<PostItemDetailPage postItem={postItem} typeItem={typeItem} ></PostItemDetailPage>
		);
	};
}

export default PostItemDetailIndex;