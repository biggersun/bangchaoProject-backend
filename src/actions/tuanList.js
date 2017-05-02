import {
    TUAN_LIST_SUCCESS
} from 'constants/actionTypes';

import { TUAN_LIST, TUAN_STATUS, TUAN_DELETE } from 'constants/api';
import { get, post } from 'assets/js/request';

function finishRequest(res) {
    return {
        res,
        type: TUAN_LIST_SUCCESS
    };
}

const pageSize = 10;

export function fetchList(opts = {}) {
    return async (dispatch, getState) => {
        const { pageIndex } = getState().routing.locationBeforeTransitions.query;
        const params = Object.assign({
            pageIndex,
            pageSize
        }, opts);

        let res;

        try {
            res = await get(TUAN_LIST, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(res));
    };
}

export function setStatus(dealId, status) {
    return async (dispatch) => {
        try {
            await post(TUAN_STATUS, { dealId, status });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}

export function remove(id) {
    return async (dispatch) => {
        try {
            await post(TUAN_DELETE, { id });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}

