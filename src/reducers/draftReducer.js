import { FETCH_CANVAS_OBJECT } from '../actions/types';

export default (state = {}, action) => {
	switch(action.type){
		case FETCH_CANVAS_OBJECT: return action.payload
		default: return state;
	}
};

