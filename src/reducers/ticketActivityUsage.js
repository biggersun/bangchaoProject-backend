import * as actionTypes from 'constants/actionTypes';

const initState = {
    pageSize: 20,
    total: 0,
    list: []
};

export default function ticketActivityUsage(state = initState, { payload, type }) {
    switch (type) {
    case actionTypes.TICKET_ACTIVITY_USAGE: {
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
