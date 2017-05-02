import {
    SETTLEMENT_LIST_SUCCESS,
    CHANGE_TABS
} from 'constants/actionTypes';

import { FETCH_SETTLEMENT_LIST } from 'constants/api';
import { get } from 'assets/js/request';
import { filterTimeDef } from 'constants/basic';

function finishRequest(res) {
    return {
        res,
        type: SETTLEMENT_LIST_SUCCESS
    };
}

const pageSize = 10;

export function fetchList(opts = {}) {
    return async (dispatch, getState) => {
        const { pageIndex, startTime, endTime, channelType = '' }
            = getState().routing.locationBeforeTransitions.query;

        const params = Object.assign({
            pageIndex,
            pageSize,
            startTime: startTime || filterTimeDef.startTime,
            endTime: endTime || filterTimeDef.endTime,
            channelType
        }, opts);

        let res;

        try {
            res = await get(FETCH_SETTLEMENT_LIST, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(res));
    };
}

export function changeTabs(value) {
    return {
        value,
        type: CHANGE_TABS
    };
}
