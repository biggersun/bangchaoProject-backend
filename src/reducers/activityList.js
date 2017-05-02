import {
    ACTIVITY_LIST_SUCCESS
} from 'constants/actionTypes';

const initState = {
    total: 0,
    list: []
};

export default function activityList(state = initState, action) {
    switch (action.type) {
    case ACTIVITY_LIST_SUCCESS: {
        const { list, total } = action.res;

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
