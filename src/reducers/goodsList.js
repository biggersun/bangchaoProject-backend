import {
    GOODS_LIST_REQUEST,
    GOODS_LIST_SUCCESS,
    GOODS_LIST_FAIL
} from 'constants/actionTypes';

const initState = {
    total: 0,
    loading: false,
    status: '',
    list: [],
    cateList: []
};

export default function goodsList(state = initState, action) {
    switch (action.type) {
    case GOODS_LIST_REQUEST:
        return {
            ...state,
            loading: true
        };
    case GOODS_LIST_SUCCESS: {
        const { data, total } = action.res;

        return {
            ...state,
            list: data,
            total,
            loading: false
        };
    }
    case GOODS_LIST_FAIL:
        return {
            ...state,
            loading: false
        };
    default:
        return state;
    }
}
