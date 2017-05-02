import {
    CHANNEL_INFO_FETCH_SUCCESS
} from 'constants/actionTypes';

import { CHANNEL_LIST_FETCH, CHANNEL_INFO_STATUS_CHANGE } from 'constants/api';
import { get, post } from 'assets/js/request';

function finishRequest(res) {
    return {
        res,
        type: CHANNEL_INFO_FETCH_SUCCESS
    };
}

const pageSize = 10;

export function fetchList(opts = {}) {
    return async (dispatch, getState) => {
        const { pageIndex, openStatus = 1 } = getState().routing.locationBeforeTransitions.query;
        const params = Object.assign({
            pageIndex,
            pageSize,
            openStatus
        }, opts);

        let res;

        try {
            res = await get(CHANNEL_LIST_FETCH, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(res));
    };
}

export function setStatus(id, status) {
    return async (dispatch) => {
        try {
            await post(CHANNEL_INFO_STATUS_CHANGE, { id, status });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}

