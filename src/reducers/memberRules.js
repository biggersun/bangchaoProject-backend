import * as actionTypes from 'constants/actionTypes';

const initState = {
    applyLog: {
        total: 0,
        pageIndex: 1,
        pageSize: 30,
        data: []
    }
};

export default function memberRules(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.MEMBER_SET_RULES_LOG: {
        return {
            ...state,
            applyLog: payload
        };
    }
    case actionTypes.MEMBER_SET_RULES_LOG_PAGE_INDEX: {
        return {
            ...state,
            applyLog: {
                ...state.applyLog,
                pageIndex: payload
            }
        };
    }
    default:
        return state;
    }
}
