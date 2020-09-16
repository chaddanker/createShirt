import { ADD_CANVAS_OBJECT } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_CANVAS_OBJECT: return [...state, action.payload];
        default: return state;
    }
};