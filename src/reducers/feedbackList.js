import * as actionTypes from 'constants/actionTypes';

const initState = {
    total: 0,
    pageSize: 10,
    list: []
};

export default function feedbackList(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.FEEDBACK_LIST: {
        return {
            ...state,
            ...payload
        };
    }
    default:
        return state;
    }
}
