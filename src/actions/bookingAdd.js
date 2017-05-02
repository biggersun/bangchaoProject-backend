import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function setBasicQuery(payload) {
    return {
        payload,
        type: actionTypes.BOOKING_ADD_QUERY
    };
}

function setComboQuery(payload) {
    return {
        payload,
        type: actionTypes.BOOKING_ADD_COMBO_QUERY
    };
}

function setRepeatError(payload) {
    return {
        payload,
        type: actionTypes.BOOKING_ADD_COMBO_ERROR
    };
}

export function resetError() {
    return {
        type: actionTypes.BOOKING_ADD_COMBO_ERROR_RESET
    };
}

export function setComboList(payload) {
    return {
        payload,
        type: actionTypes.BOOKING_ADD_COMBO_LIST
    };
}

export function setCombo(payload) {
    return {
        payload,
        type: actionTypes.BOOKING_ADD_COMBO_SET
    };
}

export function addCombo(payload) {
    return {
        payload,
        type: actionTypes.BOOKING_ADD_COMBO_ADD
    };
}

export function deleteCombo(payload) {
    return {
        payload,
        type: actionTypes.BOOKING_ADD_COMBO_DELETE
    };
}

export function fetchBasicQuery() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(api.BOOKING_DATE_PERIOD, { isFilter: 1 });
        } catch (e) {
            return;
        }

        dispatch(setBasicQuery(res));
    };
}

export function fetchComboQuery() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(api.BOOKING_COMBOS_LIST);
        } catch (e) {
            return;
        }

        dispatch(setComboQuery(res));
    };
}

export function submit(params) {
    return async (dispatch) => {
        try {
            await post(api.BOOKING_ADD, params);
        } catch (e) {
            if (e.errno === 4 && e.data.errno === 10002) {
                let repeatRoom = false;
                const repeatComboIds = [];

                e.data.data.forEach(({ comboId }) => {
                    if (!comboId) {
                        repeatRoom = true;
                    } else {
                        repeatComboIds.push(comboId);
                    }
                });

                dispatch(setRepeatError({ repeatRoom, repeatComboIds }));
            }
            return e;
        }

        message.success('新增成功!');
    };
}
