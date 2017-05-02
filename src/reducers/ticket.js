import * as actionTypes from 'constants/actionTypes';

const initState = {
    sugList: [],
    pageSize: 20,
    total: [],
    list: []
};

export default function ticket(state = initState, { payload, type }) {
    switch (type) {
    case actionTypes.TICKET_LIST: {
        const { total, list } = payload;

        return {
            ...state,
            total,
            list
        };
    }
    case actionTypes.TICKET_SUG_LIST:
        return {
            ...state,
            sugList: payload
        };
    default:
        return state;
    }
}

