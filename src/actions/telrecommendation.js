import {
    MESSAGELIST_FETCH_SUCCESS,
    BRAND_MERCHANTLIST_FETCH_SUCCESS
} from 'constants/actionTypes';
import {
    MESSAGELIST_FETCH,
    SEND_MESSAGE,
    BRAND_MERCHANT_LIST_FETCH
} from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

const setMessageList = res => ({
    res,
    type: MESSAGELIST_FETCH_SUCCESS
});

const renderMerchantList = res => ({
    res,
    type: BRAND_MERCHANTLIST_FETCH_SUCCESS
});

export function fetchMessageList(params) {
    return async (dispatch) => {
        let res;

        try {
            res = await get(MESSAGELIST_FETCH, params);
        } catch (e) {
            return;
        }
        dispatch(setMessageList(res));
    };
}

export function fetchMerchantList() {
    return async (dispatch) => {
        let res;
        try {
            res = await get(BRAND_MERCHANT_LIST_FETCH);
        } catch (error) {
            return;
        }
        dispatch(renderMerchantList(res));
    };
}

export function sendMessage(params) {
    return async (dispatch) => {
        try {
            await post(SEND_MESSAGE, params);
        } catch (error) {
            return;
        }
        message.success('发送成功!');
        dispatch(fetchMessageList());
    };
}
