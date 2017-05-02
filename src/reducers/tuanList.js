import {
    TUAN_LIST_SUCCESS
} from 'constants/actionTypes';

const initState = {
    total: 0,
    list: []
};

export default function tuanList(state = initState, action) {
    switch (action.type) {
    case TUAN_LIST_SUCCESS: {
        const { data, total } = action.res;

        return {
            ...state,
            list: data,
            total
        };
    }
    default:
        return state;
    }
}
