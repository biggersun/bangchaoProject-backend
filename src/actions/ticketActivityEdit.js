import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get, post } from 'assets/js/request';
import { push } from 'react-router-redux';
import { message } from 'antd';

function setInfo(payload) {
    return {
        payload,
        type: actionTypes.TICKET_ACTIVITY
    };
}

export function resetInfo(payload = {}) {
    return {
        payload,
        type: actionTypes.TICKET_ACTIVITY
    };
}

export function fetchInfo(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts);
        let payload = {};

        if (opts.id) {
            try {
                payload = await get(api.TICKET_ACTIVITY, params);
            } catch (e) {
                return;
            }
        }

        dispatch(setInfo(payload));
    };
}

export function submit(params) {
    return async (dispatch, getState) => {
        const { id } = getState().routing.locationBeforeTransitions.query;
        const url = id ? api.TICKET_ACTIVITY_EDIT : api.TICKET_ACTIVITY_ADD;

        const query = Object.assign({ id }, params);

        try {
            await post(url, query);
        } catch (e) {
            return;
        }

        message.success('保存成功');
        dispatch(push('/ticket-activity-list'));
    };
}
