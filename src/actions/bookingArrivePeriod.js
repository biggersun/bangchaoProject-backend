import { BOOKING_ARRIVE_PERIOD_LIST } from 'constants/actionTypes';
import { BOOKING_FETCH_ARRIVE_PERIOD, BOOKING_ADD_ARRIVE_PERIOD } from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function getArrivePeriodList(payload) {
    return {
        payload,
        type: BOOKING_ARRIVE_PERIOD_LIST
    };
}

export function fetchArrivePeriodList() {
    return async (dispatch) => {
        let arrivePeriodList;

        try {
            arrivePeriodList = await get(BOOKING_FETCH_ARRIVE_PERIOD);
        } catch (e) {
            return;
        }

        dispatch(getArrivePeriodList(arrivePeriodList));
    };
}

export function addArrivePeriod(params) {
    return async (dispatch) => {
        try {
            await post(BOOKING_ADD_ARRIVE_PERIOD, params);
        } catch (e) {
            dispatch(fetchArrivePeriodList());
            return;
        }

        message.success('添加时段成功!');
        dispatch(fetchArrivePeriodList());
    };
}
