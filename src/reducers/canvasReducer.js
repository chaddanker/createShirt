import { CANVAS_CHANGED } from '../actions/types';

export default (state = {}, action) => {
	switch(action.type){
		case CANVAS_CHANGED: return {...state, canvasObject: action.payload };
		default: return state;
	}
};

