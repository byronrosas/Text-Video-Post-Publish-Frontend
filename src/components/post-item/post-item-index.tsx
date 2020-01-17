import React from 'react';
import PostItemPage from './post-item-page';

class PostItemIndex extends React.Component {
	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		// fetch to API				
	}
	render() {
		return (
			<PostItemPage postItem={{
				title:"This is post 1",
				description:"Descripion ..ffjdsfpdjfdjf asjffjkdjd dfjdklfjdlkfj fsjfjsldf sljfsldfjdlsfjdl jj sdfjsldfjdlj"
			}} typeItem={"text"} ></PostItemPage>
		);
	};
}

export default PostItemIndex;