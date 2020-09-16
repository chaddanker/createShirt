import { UPDATE_SELECTED_OBJECT } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case UPDATE_SELECTED_OBJECT: return action.payload;
        default: return state;
    }
};