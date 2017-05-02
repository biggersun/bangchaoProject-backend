import * as actionTypes from 'constants/actionTypes';

const initState = {
    pageSize: 30,
    total: 0,
    list: []
};

export default function memberList(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.MEMBER_LIST: {
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
