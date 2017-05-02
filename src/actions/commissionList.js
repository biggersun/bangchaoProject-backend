import {
    COMMISSION_LIST_FETCH_SUCCESS
} from 'constants/actionTypes';

import { COMMISSION_LIST_FETCH, COMMISSION_INFO_SURE, COMMISSION_INFO_REASON_SAVE } from 'constants/api';
import { get, post } from 'assets/js/request';

function finishRequest(res) {
    return {
        res,
        type: COMMISSION_LIST_FETCH_SUCCESS
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
            res = await get(COMMISSION_LIST_FETCH, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(res));
    };
}

export function sure(id) {
    return async (dispatch) => {
        try {
            await post(COMMISSION_INFO_SURE, { id });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}

export function reasonSave(id, reason) {
    return async (dispatch) => {
        try {
            await post(COMMISSION_INFO_REASON_SAVE, { id, reason });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}

