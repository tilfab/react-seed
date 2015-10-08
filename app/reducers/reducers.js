import { combineReducers } from 'redux';
import { ADD_ITEM } from '../actions/types';

function items(state = [], action) {
    switch(action.type) {
        case ADD_ITEM:
            return [...state, {
                id: action.id
                text: action.text
            }];
        default:
            return state;
    }
}

const reducer = combineReducers({
    items
});

export default reducer;
