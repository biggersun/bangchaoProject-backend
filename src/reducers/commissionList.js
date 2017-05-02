import {
    COMMISSION_LIST_FETCH_SUCCESS
} from 'constants/actionTypes';

const initState = {
    total: 0,
    list: []
};

export default function commissionList(state = initState, action) {
    switch (action.type) {
    case COMMISSION_LIST_FETCH_SUCCESS: {
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
