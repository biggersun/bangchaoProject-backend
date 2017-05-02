import * as actionTypes from 'constants/actionTypes';

const initState = {
    info: {}
};

export default function ticketView(state = initState, { payload, type }) {
    switch (type) {
    case actionTypes.TICKET_VIEW: {
        return {
            info: payload
        };
    }
    default:
        return state;
    }
}
