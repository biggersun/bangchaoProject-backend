import { TUAN_DATE_LIST } from 'constants/actionTypes';
import {
    TUAN_FETCH_DATE,
    TUAN_ADD_DATE,
    TUAN_DELETE_DATE
} from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function setDateList(payload) {
    return {
        payload,
        type: TUAN_DATE_LIST
    };
}

export function fetchDateList() {
    return async (dispatch) => {
        let dateList;

        try {
            dateList = await get(TUAN_FETCH_DATE);
        } catch (e) {
            return;
        }

        dispatch(setDateList({ normalDateList: dateList }));
    };
}

export function addDate(params) {
    return async (dispatch) => {
        try {
            await post(TUAN_ADD_DATE, params);
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
            await post(TUAN_DELETE_DATE, params);
        } catch (e) {
            return;
        }

        message.success('删除日期成功!');
        dispatch(fetchDateList());
    };
}
