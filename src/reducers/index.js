import { combineReducers } from 'redux';

import canvasReducer from './canvasReducer';
import authReducer from './authReducer';
import checkoutReducer from './checkoutReducer';
import orderReducer from './orderReducer';
import draftReducer from './draftReducer';
import photosReducer from './photosReducer';
import objectsReducer from './objectsReducer';
import selectedReducer from './selectedReducer';

export default combineReducers({
	canvasObject: canvasReducer,
	auth: authReducer,
	canvasImage: checkoutReducer,
	orders: orderReducer,
	draftObject: draftReducer,
	photos: photosReducer,
	canvasObjects: objectsReducer,
	selected: selectedReducer
});