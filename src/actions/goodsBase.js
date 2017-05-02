import {
    GOODS_BASE_LIST_SUCCESS
} from 'constants/actionTypes';

import { FETCH_GOODS_BASE_LIST } from 'constants/api';
import { get } from 'assets/js/request';


function finishRequest(res) {
    return {
        res,
        type: GOODS_BASE_LIST_SUCCESS
    };
}

export function fetchList(params = {}, opts) {
    return async (dispatch) => {
        const pmp = Object.assign({
            pageSize: -1,
            status: 1
        }, params);

        let res;

        try {
            res = await get(FETCH_GOODS_BASE_LIST, pmp, opts);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(res));
    };
}

