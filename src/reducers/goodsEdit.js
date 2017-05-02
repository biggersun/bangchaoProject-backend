import {
    GOODS_CHANGE_INFO
} from 'constants/actionTypes';

export default function goodsEdit(state = {}, action) {
    switch (action.type) {
    case GOODS_CHANGE_INFO:
        return action.info;
    default:
        return state;
    }
}

