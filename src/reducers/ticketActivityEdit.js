import * as actionTypes from 'constants/actionTypes';

const initState = {
    info: {
        giftTplId: [],
        configure: []
    }
};

export default function ticketActivityEdit(state = initState, { payload, type }) {
    switch (type) {
    case actionTypes.TICKET_ACTIVITY:
        return {
            ...state,
            info: payload
        };
    default:
        return state;
    }
}
