import {
    COMBOS_LIST_REQUEST,
    COMBOS_LIST_SUCCESS,
    COMBOS_LIST_FAIL
} from 'constants/actionTypes';

import { GOODS_LIST, GOODS_STATUS, GOODS_DELETE } from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function addRequest() {
    return {
        type: COMBOS_LIST_REQUEST
    };
}

function finishRequest(res) {
    return {
        res,
        type: COMBOS_LIST_SUCCESS
    };
}

function rejectRequest() {
    return {
        type: COMBOS_LIST_FAIL
    };
}

const pageSize = 10;

export function fetchList() {
    return async (dispatch, getState) => {
        dispatch(addRequest());

        const {
            pageIndex,
            goodsName,
            status,
            categoryId
        }
            = getState().routing.locationBeforeTransitions.query;

        const params = {
            pageIndex,
            pageSize,
            goodsName,
            status,
            categoryId,
            type: 2
        };

        let res;

        try {
            res = await get(GOODS_LIST, params);
        } catch (e) {
            dispatch(rejectRequest());
            return;
        }

        dispatch(finishRequest(res));
    };
}

export function setStatus(id) {
    return async (dispatch) => {
        try {
            await post(GOODS_STATUS, { id });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}

export function remove(id) {
    return async (dispatch) => {
        try {
            await post(GOODS_DELETE, { id });
        } catch (e) {
            return;
        }

        message.success('删除成功');
        dispatch(fetchList());
    };
}

