import {
    STOCK_FETCH_SUCCESS
} from 'constants/actionTypes';

import { STOCK_LIST_FETCH, STOCK_LIST_CHANGE_STOCK } from 'constants/api';
import { get, post } from 'assets/js/request';

function finishRequest(res) {
    return {
        res,
        type: STOCK_FETCH_SUCCESS
    };
}

const pageSize = 10;

export function fetchList(opts = {}) {
    return async (dispatch, getState) => {
        const { pageIndex, goodsName }
            = getState().routing.locationBeforeTransitions.query;

        const params = Object.assign({
            pageIndex,
            pageSize,
            goodsName
        }, opts);

        let res;

        try {
            res = await get(STOCK_LIST_FETCH, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(res));
    };
}

export function setStockStatus(goodsId, stockStatus) {
    return async (dispatch) => {
        const action = stockStatus === -1 ? 1 : 2;
        try {
            await post(STOCK_LIST_CHANGE_STOCK, { goodsId, action });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}

