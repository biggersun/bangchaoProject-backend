import {
    SETTLEMENT_LIST_SUCCESS
} from 'constants/actionTypes';

const initState = {
    list: [],
    total: 0
};

export default function orderTotal(state = initState, action) {
    switch (action.type) {
    case SETTLEMENT_LIST_SUCCESS: {
        const { data, total } = action.res;

        return {
            ...state,
            list: data,
            total
        };
    }
    default:
        return state;
    }
}
