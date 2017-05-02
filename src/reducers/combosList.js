import {
    COMBOS_LIST_REQUEST,
    COMBOS_LIST_SUCCESS,
    COMBOS_LIST_FAIL
} from 'constants/actionTypes';

const initState = {
    total: 0,
    loading: false,
    status: '',
    list: []
};

export default function combosList(state = initState, action) {
    switch (action.type) {
    case COMBOS_LIST_REQUEST:
        return {
            ...state,
            loading: true
        };
    case COMBOS_LIST_SUCCESS: {
        const { data, total } = action.res;

        return {
            ...state,
            list: data,
            total,
            loading: false
        };
    }
    case COMBOS_LIST_FAIL:
        return {
            ...state,
            loading: false
        };
    default:
        return state;
    }
}
