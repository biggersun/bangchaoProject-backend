import * as actionTypes from 'constants/actionTypes';

const initState = {
    list: [],
    total: 0
};

export default function ticketVerify(state = initState, { payload, type }) {
    switch (type) {
    case actionTypes.TICKET_VERIFY_LIST_SUCCESS: {
        const { list, total } = payload;
        return {
            list,
            total
        };
    }
    default:
        return state;
    }
}
