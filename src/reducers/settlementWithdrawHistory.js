import * as actionTypes from 'constants/actionTypes';

const initState = {
    total: 0,
    list: []
};

export default function settlementWithdrawHistory(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.FINANCE_DRAW_HISTORY:
        return payload;
    default:
        return state;
    }
}
