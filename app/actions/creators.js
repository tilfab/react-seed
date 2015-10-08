import { ADD_ITEM } from './types';

export function addItem(id, text) {
    return {
        type: ADD_ITEM,
        id: id,
        text: text
    }
}