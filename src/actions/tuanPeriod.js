import { TUAN_PERIOD_LIST } from 'constants/actionTypes';
import {
    TUAN_FETCH_PERIOD,
    TUAN_ADD_PERIOD,
    TUAN_DELETE_PERIOD
} from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function setPeriodList(payload) {
    return {
        payload,
        type: TUAN_PERIOD_LIST
    };
}

export function fetchPeriodList() {
    return async (dispatch) => {
        let periodList;

        try {
            periodList = await get(TUAN_FETCH_PERIOD);
        } catch (e) {
            return;
        }

        dispatch(setPeriodList(periodList));
    };
}

export function addPeriod(params) {
    return async (dispatch) => {
        try {
            await post(TUAN_ADD_PERIOD, params);
        } catch (e) {
            return false;
        }

        message.success('添加时段成功!');
        dispatch(fetchPeriodList());

        return true;
    };
}

export function deletePeriod(params) {
    return async (dispatch) => {
        try {
            await post(TUAN_DELETE_PERIOD, params);
        } catch (e) {
            return false;
        }

        message.success('删除时段成功!');
        dispatch(fetchPeriodList());

        return true;
    };
}

