import { ADD_PHOTO } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_PHOTO: return [...state, action.payload];
        default: return state;
    }
};