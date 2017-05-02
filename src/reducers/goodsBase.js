import {
    GOODS_BASE_LIST_SUCCESS
} from 'constants/actionTypes';

const initState = {
    list: []
};

export default function goodsEdit(state = initState, action) {
    switch (action.type) {
    case GOODS_BASE_LIST_SUCCESS:
        return {
            list: action.res.list
        };
    default:
        return state;
    }
}

