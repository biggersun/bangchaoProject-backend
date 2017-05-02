import { BOOKING_PERIOD_LIST } from 'constants/actionTypes';
import {
    BOOKING_FETCH_PERIOD,
    BOOKING_ADD_PERIOD,
    BOOKING_DELETE_PERIOD
} from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function setPeriodList(payload) {
    return {
        payload,
        type: BOOKING_PERIOD_LIST
    };
}

export function fetchPeriodList() {
    return async (dispatch) => {
        let periodList;

        try {
            periodList = await get(BOOKING_FETCH_PERIOD);
        } catch (e) {
            return;
        }

        dispatch(setPeriodList(periodList));
    };
}

export function addPeriod(params) {
    return async (dispatch) => {
        try {
            await post(BOOKING_ADD_PERIOD, params);
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
            await post(BOOKING_DELETE_PERIOD, params);
        } catch (e) {
            return false;
        }

        message.success('删除时段成功!');
        dispatch(fetchPeriodList());

        return true;
    };
}

