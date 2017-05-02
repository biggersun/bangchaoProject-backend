import * as actionTypes from 'constants/actionTypes';

const initState = {
    groupon: {}
};

export default function groupon(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.GROUPON:
        return {
            ...state,
            groupon: payload
        };
    default:
        return state;
    }
}
