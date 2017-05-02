import {
    SERVICE_LIST_SUCCESS
} from 'constants/actionTypes';

import { FETCH_SERVICE_LIST } from 'constants/api';
import { get } from 'assets/js/request';

function finishRequest(res) {
    return {
        res,
        type: SERVICE_LIST_SUCCESS
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
            res = await get(FETCH_SERVICE_LIST, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(res));
    };
}

