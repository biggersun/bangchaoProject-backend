import {
    SERVICE_LIST_SUCCESS
} from 'constants/actionTypes';

const initState = {
    total: 0,
    list: []
};

export default function serviceList(state = initState, action) {
    switch (action.type) {
    case SERVICE_LIST_SUCCESS: {
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
