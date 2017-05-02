import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';
import { updateQuery } from './router';

function setAccountList(payload) {
    return {
        payload,
        type: actionTypes.FINANCE_ACCOUNT_LIST
    };
}

function setDrawList(payload) {
    return {
        payload,
        type: actionTypes.FINANCE_DRAW_LIST
    };
}

export function fetchAccountList() {
    return async (dispatch, getState) => {
        const { payeeId } = getState().routing.locationBeforeTransitions.query;

        let res;

        try {
            res = await get(api.FINANCE_ACCOUNT);
        } catch (e) {
            return;
        }

        const firstPayeeId = res.accountList.length > 0 ? res.accountList[0].payeeId : null;

        if (!payeeId && firstPayeeId) {
            dispatch(updateQuery({ payeeId: firstPayeeId }), true);
        }

        dispatch(setAccountList(res));
    };
}

const pageSize = 30;

export function fetchDrawList() {
    return async (dispatch, getState) => {
        const { pageIndex, payeeId } = getState().routing.locationBeforeTransitions.query;

        if (!payeeId) {
            return;
        }

        const params = {
            pageIndex,
            pageSize,
            payeeId
        };

        let res;

        try {
            res = await get(api.FINANCE_DRAW_LIST, params);
        } catch (e) {
            return;
        }

        const { list, total } = res;

        dispatch(setDrawList({ list, total }));
    };
}

export function submit(params) {
    return async (dispatch) => {
        try {
            await post(api.FINANCE_DRAW_SUBMIT, params);
        } catch (e) {
            return e;
        }

        dispatch(fetchAccountList());
        dispatch(fetchDrawList());

        message.success('提现成功');

        return false;
    };
}
