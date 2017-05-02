import {
    ORDER_TOTAL_LIST_SUCCESS
} from 'constants/actionTypes';

import { orderFilterTimeDef } from 'constants/basic';

const initState = {
    startTime: orderFilterTimeDef.startTime,
    endTime: orderFilterTimeDef.endTime,
    data: {},
    channelType: ''
};

export default function orderTotal(state = initState, action) {
    switch (action.type) {
    case ORDER_TOTAL_LIST_SUCCESS: {
        const { startTime, endTime, data, channelType } = action.res;
        return {
            ...state,
            startTime,
            endTime,
            data,
            channelType
        };
    }
    default:
        return state;
    }
}
