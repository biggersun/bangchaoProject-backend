import { BOOKING_DATE_LIST } from 'constants/actionTypes';
import {
    BOOKING_FETCH_DATE,
    BOOKING_ADD_DATE,
    BOOKING_DELETE_DATE
} from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function setDateList(payload) {
    return {
        payload,
        type: BOOKING_DATE_LIST
    };
}

export function fetchDateList() {
    return async (dispatch) => {
        let dateList;

        try {
            dateList = await get(BOOKING_FETCH_DATE);
        } catch (e) {
            return;
        }

        const normalDateList = [];
        const specialDateList = [];

        dateList.forEach((item) => {
            if (item.type === 1) {
                normalDateList.push(item);
            } else {
                specialDateList.push(item);
            }
        });

        dispatch(setDateList({ normalDateList, specialDateList }));
    };
}

export function addDate(params) {
    return async (dispatch) => {
        try {
            await post(BOOKING_ADD_DATE, params);
        } catch (e) {
            return;
        }

        message.success('添加日期成功!');
        dispatch(fetchDateList());
    };
}

export function deleteDate(params) {
    return async (dispatch) => {
        try {
            await post(BOOKING_DELETE_DATE, params);
        } catch (e) {
            return;
        }

        message.success('删除日期成功!');
        dispatch(fetchDateList());
    };
}
