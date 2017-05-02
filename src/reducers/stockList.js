import {
    STOCK_FETCH_SUCCESS
} from 'constants/actionTypes';

const initState = {
    total: 0,
    list: []
};

export default function stockList(state = initState, action) {
    switch (action.type) {
    case STOCK_FETCH_SUCCESS: {
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
