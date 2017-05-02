import * as types from 'constants/actionTypes';
import { BOOKING_STOCK_TPL_SEARCH, BOOKING_STOCK_QUERY, BOOKING_STOCK_TPL_EDIT } from 'constants/api';
import { message } from 'antd';
import { get, post } from 'assets/js/request';
import { updateQuery } from 'actions/router';

function setQuery(payload) {
    return {
        payload,
        type: types.BOOKING_STOCK_TPL_BASE
    };
}

function setStock(payload) {
    return {
        payload,
        type: types.BOOKING_STOCK_TPL
    };
}

export function showEditModal(payload) {
    return {
        payload,
        type: types.BOOKING_STOCK_TPL_EDIT_SHOW
    };
}

export function closeEditModal() {
    return {
        type: types.BOOKING_STOCK_TPL_EDIT_CLOSE
    };
}

export function setNumber(payload) {
    return {
        payload,
        type: types.BOOKING_STOCK_TPL_SET_NUMBER
    };
}

export function fetchQuery() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(BOOKING_STOCK_QUERY);
        } catch (e) {
            return;
        }

        const { periodList, roomTypeList } = res;

        dispatch(setQuery({ periodList, roomTypeList }));
    };
}

export function fetchStock() {
    return async (dispatch, getState) => {
        const { week } = getState().routing.locationBeforeTransitions.query;

        if (!week) {
            dispatch(updateQuery({ week: '1' }, true));
            return;
        }

        let stockList;

        try {
            stockList = await get(BOOKING_STOCK_TPL_SEARCH, { week });
        } catch (e) {
            return;
        }

        dispatch(setStock(stockList));
    };
}

export function editStock() {
    return async (dispatch, getState) => {
        const { bookingStockTpl, routing } = getState();
        const { roomTypeId, periodId, currentStock } = bookingStockTpl;
        const { week } = routing.locationBeforeTransitions.query;

        const params = {
            roomTypeId,
            week,
            roomPeriodId: periodId,
            stockCount: currentStock
        };

        try {
            await post(BOOKING_STOCK_TPL_EDIT, params);
        } catch (e) {
            return;
        }

        message.success('修改成功!');
        dispatch(closeEditModal());
        dispatch(fetchStock());
    };
}
