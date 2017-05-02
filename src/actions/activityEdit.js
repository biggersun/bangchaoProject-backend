import { ACTIVITY_INFO_FETCH, ACTIVITY_INFO_ADD, ACTIVITY_INFO_EDIT } from 'constants/api';
import { get, post } from 'assets/js/request';
import { push } from 'react-router-redux';
import { message } from 'antd';
import { ACTIVITY_INFO_FETCH_SUCCESS } from 'constants/actionTypes';

function setBasicInfo(info) {
    return {
        type: ACTIVITY_INFO_FETCH_SUCCESS,
        info
    };
}

export function fetchInfo() {
    return async (dispatch, getState) => {
        const id = getState().routing.locationBeforeTransitions.query.id;

        let res;

        if (!id) {
            res = {};
        } else {
            try {
                res = await get(ACTIVITY_INFO_FETCH, { id });
            } catch (e) {
                return;
            }
        }

        dispatch(setBasicInfo(res));
    };
}

export function submit(info) {
    return async (dispatch, getState) => {
        const id = getState().routing.locationBeforeTransitions.query.id;
        const url = id ? ACTIVITY_INFO_EDIT : ACTIVITY_INFO_ADD;

        try {
            await post(url, Object.assign({ id }, info));
        } catch (e) {
            return;
        }

        message.success(`${id ? '修改' : '新增'}成功`);
        dispatch(push('/activity'));
    };
}
