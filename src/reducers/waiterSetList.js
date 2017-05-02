import * as actionTypes from 'constants/actionTypes';

const initState = {
    list: []
};

export default function waiterSetList(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.WAITER_SET_LIST_SUCCESS: {
        const { money } = payload;

        return {
            ...state,
            list: money
        };
    }
    default:
        return state;
    }
}
