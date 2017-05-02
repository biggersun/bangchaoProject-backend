import * as actionTypes from 'constants/actionTypes';

const initState = {
    pageSize: 30,
    total: 0,
    list: []
};

export default function memberOrderList(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.MEMBER_ORDER_LIST: {
        const { data: list, total } = payload;

        return {
            ...state,
            list,
            total
        };
    }
    default:
        return state;
    }
}
