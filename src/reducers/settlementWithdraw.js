import * as actionTypes from 'constants/actionTypes';

const initState = {
    tips: [],
    payTransferMoney: 0,
    accountList: [],
    drawList: {
        total: 0,
        list: []
    }
};

export default function settlementWithdraw(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.FINANCE_ACCOUNT_LIST: {
        const { accountList, payTransferMoney, tips } = payload;

        return {
            ...state,
            accountList,
            tips,
            payTransferMoney
        };
    }
    case actionTypes.FINANCE_DRAW_LIST:
        return {
            ...state,
            drawList: payload
        };
    default:
        return state;
    }
}
