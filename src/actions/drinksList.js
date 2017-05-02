import {
    DRINKS_LIST_SUCCESS
} from 'constants/actionTypes';

import { DIRNKS_LIST } from 'constants/api';
import { get } from 'assets/js/request';

const pageSize = 10;

function finishRequest(payload) {
    return {
        payload,
        type: DRINKS_LIST_SUCCESS
    };
}


export function fetchList(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({
            pageSize
        }, opts);

        let payload;

        try {
            payload = await get(DIRNKS_LIST, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(payload));
    };
}
