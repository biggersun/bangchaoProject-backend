import {
    DRINKS_LIST_SUCCESS
} from 'constants/actionTypes';

const initState = {
    total: 0,
    loading: false,
    list: []
};

export default function drinksList(state = initState, action) {
    switch (action.type) {
    case DRINKS_LIST_SUCCESS: {
        const { list, total } = action.payload;

        return {
            ...state,
            list,
            total,
            loading: false
        };
    }
    default:
        return state;
    }
}
