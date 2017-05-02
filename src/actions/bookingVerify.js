import { BOOKING_VERIFY_LIST_SUCCESS } from 'constants/actionTypes';
import { BOOKING_VERIFY_LIST, BOOKING_VERIFY } from 'constants/api';
import { message } from 'antd';
import { get, post } from 'assets/js/request';

function setBookingList(payload) {
    return {
        payload,
        type: BOOKING_VERIFY_LIST_SUCCESS
    };
}

export function fetchBookingList() {
    return async (dispatch, getState) => {
        const pageSize = 10;
        const { pageIndex, date } = getState().routing.locationBeforeTransitions.query;
        const params = {
            pageIndex,
            pageSize,
            date
        };

        let res;

        try {
            res = await get(BOOKING_VERIFY_LIST, params);
        } catch (e) {
            return;
        }

        const { total, orders } = res;

        dispatch(setBookingList({ total, orders }));
    };
}

export function verify(orderId) {
    return async (dispatch) => {
        try {
            await post(BOOKING_VERIFY, { orderId }, { needLoading: false });
        } catch (e) {
            return;
        }

        message.success('开房成功!');
        dispatch(fetchBookingList());
    };
}

