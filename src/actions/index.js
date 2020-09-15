import { FETCH_ORDERS, CANVAS_CHANGED, CANVAS_DONE, SIGN_IN, SIGN_OUT, FETCH_CANVAS_OBJECT, ADD_PHOTO } from './types';

import createShirt from '../apis/createShirt';

export const canvasChanged = (canvasObject) => {
	return {
		type: CANVAS_CHANGED,
		payload: canvasObject
	};
};

export const canvasDone = (canvasImage, canvasObject) => async (dispatch, getState) => {

	dispatch({
		type: CANVAS_DONE,
		payload: canvasImage
	});
};

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const fetchOrders = () => async dispatch => {
	const response = await createShirt.get('/orders');

	dispatch({ type: FETCH_ORDERS, payload: response.data });
};

export const fetchCanvasObject = (orderId) => async (dispatch, getState)  => {
	const response = await createShirt.get('/orders');

	response.data.map((order) => {
		if(order.id === orderId) {
			dispatch({ type: FETCH_CANVAS_OBJECT, payload: order.canvasObject });
		}
	});
};

export const addPhoto = photo => {
	return {
		type: ADD_PHOTO,
		payload: photo
	};
}