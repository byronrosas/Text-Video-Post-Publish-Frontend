import { type as ItemAction } from '../actions/itemAction';
import { Textobj } from '../../models/textobj';
let defaultState:Textobj[] = [];

export default (state = defaultState,  action:any) => {

  var updated = Object.assign({}, state)

  switch(action.type) {

    case ItemAction: 		
		updated = action.payload;		
		return updated

    default:
		return state
    }
}