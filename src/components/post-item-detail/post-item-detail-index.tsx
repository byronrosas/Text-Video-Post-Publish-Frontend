import React from 'react';
import PostItemDetailPage from './post-item-detail-page';
import { Post } from '../../models/post';
interface IProps {
	post:Post
}
class PostItemDetailIndex extends React.Component<IProps, {}> {
	constructor(props: any) {
		super(props);
		this.formatVideo = this.formatVideo.bind(this);
	}
	formatVideo(url: string) {
		if (url.indexOf("embed") === -1 || url.indexOf("video") === -1) {
			if (url.indexOf("youtube") !== -1) {
				let newURL = null;
				const base = "https://www.youtube.com/embed/";
				let v_pos = url.indexOf("v"); //index id v=######
				let amp_pos = url.indexOf("&");
				let from = v_pos + 1; //omit "="
				let to = amp_pos !== -1 ? amp_pos : url.length;
				let id_video = url.slice(from, to);
				newURL = base + id_video;				
				return newURL;

			}
			if (url.indexOf("vimeo") !== -1) {
				let newURL = null;
				const base = "https://player.vimeo.com/video/";
				let vimeo_pos = url.indexOf("vimeo");
				let from = url.indexOf("/", vimeo_pos)+1; //index last "/", +1 omit "/"							
				let id_video = url.slice(from);			
				newURL = base + id_video;				
				return newURL;
			}
		} else {
			return url;
		}
	}
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
			<PostItemDetailPage postItem={postItem} typeItem={typeItem} formatVideo={this.formatVideo}></PostItemDetailPage>
		);
	};
}

export default PostItemDetailIndex;