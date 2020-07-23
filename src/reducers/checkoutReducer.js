import { CANVAS_DONE } from '../actions/types';

export default (state = '', action) => {
	switch(action.type){
		case CANVAS_DONE: return action.payload;
		default: return state;
	}
};

