import * as actionTypes from 'constants/actionTypes';

export default function ticketActivityConfig(state = [], { payload, type }) {
    switch (type) {
    case actionTypes.TICKET_ACTIVITY_CONFIG:
        return payload;
    default:
        return state;
    }
}
