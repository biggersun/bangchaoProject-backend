import {
    SELL_COUNT_LIST_SUCCESS
} from 'constants/actionTypes';

const initState = {
    total: 0,
    list: []
};

export default function sellCountList(state = initState, { type, payload }) {
    switch (type) {
    case SELL_COUNT_LIST_SUCCESS: {
        const { list, total } = payload;

        return {
            ...state,
            list,
            total
        };
    }
    default:
        return state;
    }
}
