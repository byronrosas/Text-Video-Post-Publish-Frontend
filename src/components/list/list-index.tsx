import React from 'react';
import { connect } from 'react-redux';
import ListPage from './list-page';
interface IState {
	nitems: number;
}

interface IProps {
	isPostNew:number,	
}
class ListIndex extends React.Component<IProps, IState>{
	constructor(props: any) {
		super(props);
		this.refreshQuery=this.refreshQuery.bind(this);
		this.state = this.state = {
			nitems: 0
		}

	}
	componentDidMount()
	{		
		if (this.state.nitems !== this.props.isPostNew) {
			this.setState({nitems:this.props.isPostNew});			
		}
	}
	
	refreshQuery(refetch:any)
	{
		refetch();
	}

	render() {
		return (
			<ListPage refreshQuery={this.refreshQuery}></ListPage>
		);
	};
}

const mapStateToProps = (state: any) => ({
	isPostNew: state.postReducer,
});

export default connect(mapStateToProps)(ListIndex);