import { BOOKING_FETCH_DAYS, BOOKING_EDIT_DAYS } from 'constants/api';
import { BOOKING_DAYS } from 'constants/actionTypes';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function setDays(payload) {
    return {
        payload,
        type: BOOKING_DAYS
    };
}

export function fetchBookingDays() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(BOOKING_FETCH_DAYS);
        } catch (e) {
            return;
        }

        dispatch(setDays(res.days));
    };
}

export function editBookingDays(days) {
    return async (dispatch) => {
        try {
            await post(BOOKING_EDIT_DAYS, { days });
        } catch (e) {
            return;
        }

        message.success('修改预订天数成功！');
        dispatch(setDays(days));
    };
}
