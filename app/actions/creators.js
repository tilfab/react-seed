import { ADD_ITEM } from './types';

export function addItem(text) {
    return {
        type: ADD_ITEM,
        text: text
    }
}