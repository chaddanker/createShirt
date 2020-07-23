import _ from 'lodash';
import { FETCH_ORDERS } from '../actions/types';

export default (state = {}, action) => {
	switch(action.type){
		case FETCH_ORDERS: return action.payload;
		default: return state;
	}
};