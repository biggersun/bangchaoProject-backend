import * as actionTypes from 'constants/actionTypes';

const initState = {
    pageSize: 30,
    total: 0,
    list: []
};

export default function memberOfflineList(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.MEMBER_OFFLINE_LIST: {
        const { data, total } = payload;

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

