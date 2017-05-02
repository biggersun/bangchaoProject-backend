import {
    ORDER_LIST_SUCCESS,
    ORDER_DETAIL_SUCCESS,
    ORDER_REFUND_SHOW,
    ORDER_REFUND_CLOSE,
    ORDER_LIST_RESET
} from 'constants/actionTypes';

import {
    FETCH_ORDER_LIST,
    FETCH_ORDER_DETAIL,
    ORDER_LIST_PRINT,
    ORDER_REFUND,
    ORDER_REFUND_DETAIL
} from 'constants/api';

import { get, post } from 'assets/js/request';
import { message } from 'antd';
import { orderTypes } from 'constants/basic';

export function setOrdersInfo(res) {
    return {
        res,
        type: ORDER_LIST_SUCCESS
    };
}

export function resetOrderList() {
    return { type: ORDER_LIST_RESET };
}

function showRefundModal(payload) {
    return {
        payload,
        type: ORDER_REFUND_SHOW
    };
}

export function closeRefundModal() {
    return {
        type: ORDER_REFUND_CLOSE
    };
}

const pageSize = 10;

export function fetchList(opts = {}) {
    return async (dispatch, getState) => {
        const {
            pageIndex,
            type = '100',
            channelType = '0',
            orderId,
            payType,
            orderStatus,
            muserId
        } = getState().routing.locationBeforeTransitions.query;
        const params = Object.assign({
            pageIndex,
            pageSize,
            type,
            channelType,
            orderId,
            payType,
            orderStatus,
            muserId
        }, opts);


        let res;

        try {
            res = await get(FETCH_ORDER_LIST, params);
        } catch (e) {
            return;
        }

        dispatch(setOrdersInfo(res));
    };
}

export function fetchOrderDetail(opts = {}) {
    return async (dispatch, getState) => {
        const { id, tuanCode } = getState().routing.locationBeforeTransitions.query;
        const params = Object.assign({
            orderId: id,
            verifyCode: tuanCode
        }, opts);

        let res;

        try {
            res = await get(FETCH_ORDER_DETAIL, params);
        } catch (e) {
            return;
        }

        dispatch({
            res,
            type: ORDER_DETAIL_SUCCESS
        });
    };
}

export function print(params = {}) {
    return async () => {
        try {
            await get(ORDER_LIST_PRINT, params);
        } catch (e) {
            return;
        }

        message.success('打印成功');
    };
}

export function fetchRefundDetail(orderId) {
    return async (dispatch, getState) => {
        const { orderList, user } = getState();
        let detail;

        const order = orderList.list.find(o => o.orderId === orderId);
        const { type, goodsInfo, payMoney } = order;

        if (Array.isArray(goodsInfo)) {
            goodsInfo.forEach(item => item.max = item.num); // eslint-disable-line no-param-reassign
        }

        if (order.canRefund) {
            detail = {
                type,
                goodsInfo,
                applyUserName: user.username,
                userMobile: order.userMobile,
                typeCN: orderTypes.find(o => o.id === String(type)).name,
                display: false,
                refundMoney: payMoney * 100
            };
        } else {
            try {
                detail = await get(ORDER_REFUND_DETAIL, { orderId });
            } catch (e) {
                return;
            }
        }


        detail.orderId = orderId;
        dispatch(showRefundModal(detail));
    };
}

export function refundOrder(params) {
    return async (dispatch) => {
        try {
            await post(ORDER_REFUND, params);
        } catch (e) {
            return true;
        }

        message.success('申请退款成功');

        setTimeout(() => dispatch(fetchList()), 1000);

        return false;
    };
}
