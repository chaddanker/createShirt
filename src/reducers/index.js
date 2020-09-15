import { combineReducers } from 'redux';

import canvasReducer from './canvasReducer';
import authReducer from './authReducer';
import checkoutReducer from './checkoutReducer';
import orderReducer from './orderReducer';
import draftReducer from './draftReducer';
import photosReducer from './photosReducer';

export default combineReducers({
	canvasObject: canvasReducer,
	auth: authReducer,
	canvasImage: checkoutReducer,
	orders: orderReducer,
	draftObject: draftReducer,
	photos: photosReducer
});