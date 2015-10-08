import { combineReducers } from 'redux';
import { ADD_ITEM } from '../actions/types';

function items(state = [], action) {
    switch(action) {
        case ADD_ITEM:
            return [...state, {
                text: action.text
            }];
        default:
            return state;
    }
}

const reducer = combineReducers({

});

export default reducer;
