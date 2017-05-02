import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { message } from 'antd';
import { push } from 'react-router-redux';
import { get, post } from 'assets/js/request';

function setGoodsList(payload) {
    return {
        payload,
        type: actionTypes.BOOKING_COMBOS_GOODS_LIST
    };
}

function setComboInfo(payload) {
    return {
        payload,
        type: actionTypes.BOOKING_COMBOS_INFO
    };
}

export function addCombo(payload) {
    return {
        payload,
        type: actionTypes.BOOKING_COMBOS_ADD
    };
}

export function deleteCombo(payload) {
    return {
        payload,
        type: actionTypes.BOOKING_COMBOS_DELETE
    };
}

export function setComboNumber(payload) {
    return {
        payload,
        type: actionTypes.BOOKING_COMBOS_SET_NUMBER
    };
}

export function fetchGoodsList() {
    return async (dispatch) => {
        const params = {
            type: 1,
            pageSize: -1
        };

        let goodsList;

        try {
            goodsList = await get(api.GOODS_LIST, params, { needLoading: false });
        } catch (e) {
            return;
        }

        dispatch(setGoodsList(goodsList.data));
    };
}

function fetchComboInfo() {
    return async (dispatch, getState) => {
        const { comboId } = getState().routing.locationBeforeTransitions.query;

        let comboInfo;

        if (comboId) {
            try {
                comboInfo = await get(api.BOOKING_COMBOS_FIND, { comboId });
            } catch (e) {
                return;
            }
        } else {
            comboInfo = {};
        }

        const name = comboId ? comboInfo.name : '';
        const comboList = comboId ? comboInfo.packageInfo.map(({ goodsId, num }) => ({ goodsId, num })) : [];
        const packageInfo = comboId ? comboInfo.packageInfo : [];

        dispatch(setComboInfo({ name, comboList, packageInfo }));
    };
}

export function initStore() {
    return (dispatch) => {
        dispatch(fetchGoodsList());
        dispatch(fetchComboInfo());
    };
}

export function editCombo(params) {
    return async (dispatch, getState) => {
        const { comboId } = getState().routing.locationBeforeTransitions.query;
        const url = comboId ? api.BOOKING_COMBOS_EDIT : api.BOOKING_COMBOS_ADD;

        const query = ({
            ...params,
            comboId
        });

        try {
            await post(url, { data: JSON.stringify(query) });
        } catch (e) {
            return;
        }

        message.success(`${comboId ? '修改' : '新增'}成功`);

        dispatch(push('/booking/combo'));
    };
}
