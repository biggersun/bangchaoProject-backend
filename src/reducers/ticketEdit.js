import * as actionTypes from 'constants/actionTypes';

const initState = {
    info: {}
};

export default function ticketEdit(state = initState, { payload, type }) {
    switch (type) {
    case actionTypes.TICKET_COPY: {
        return {
            info: payload
        };
    }
    default:
        return state;
    }
}
