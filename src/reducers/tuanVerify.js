import {
    TUAN_VERIFY_LIST_SUCCESS,
    TUAN_VERIFY_CODES
} from 'constants/actionTypes';

const initState = {
    total: 0,
    list: [],
    currentCodes: []
};

export default function tuanVerify(state = initState, action) {
    switch (action.type) {
    case TUAN_VERIFY_LIST_SUCCESS: {
        const { orders, total } = action.res;

        return {
            ...state,
            list: orders,
            total
        };
    }
    case TUAN_VERIFY_CODES: {
        return {
            ...state,
            currentCodes: action.payload
        };
    }
    default:
        return state;
    }
}
