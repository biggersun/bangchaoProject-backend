import * as actionTypes from 'constants/actionTypes';

const initState = {
    combos: [],
    combo: {}
};

export default function grouponCombo(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.GROUPON_COMBO_LIST:
        return {
            ...state,
            combos: payload
        };
    case actionTypes.GROUPON_COMBO:
        return {
            ...state,
            combo: payload
        };
    default:
        return state;
    }
}
