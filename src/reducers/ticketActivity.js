import * as actionTypes from 'constants/actionTypes';

const initState = {
    activeList: [],
    pageSize: 20,
    total: 0,
    list: []
};

export default function ticketActivity(state = initState, { payload, type }) {
    switch (type) {
    case actionTypes.TICKET_ACTIVITY_ACTIVE_LIST:
        return {
            ...state,
            activeList: payload
        };
    case actionTypes.TICKET_ACTIVITY_LIST: {
        const { total, list } = payload;

        return {
            ...state,
            total,
            list
        };
    }
    default:
        return state;
    }
}
