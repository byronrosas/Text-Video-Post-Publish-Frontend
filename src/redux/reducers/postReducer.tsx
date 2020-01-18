import { type as addpost } from '../actions/addPost';
let defaultState = 0;

export default (state = defaultState,  action:any) => {

  var updated = state;

  switch(action.type) {

    case addpost:      		
		updated = action.payload;		
		return updated

    default:
		return state
  }
}