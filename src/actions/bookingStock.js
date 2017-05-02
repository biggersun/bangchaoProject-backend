import * as types from 'constants/actionTypes';
import { BOOKING_STOCK_SEARCH, BOOKING_STOCK_QUERY, BOOKING_STOCK_EDIT } from 'constants/api';
import { message } from 'antd';
import { get, post } from 'assets/js/request';
import { updateQuery } from 'actions/router';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

function setQuery(payload) {
    return {
        payload,
        type: types.BOOKING_STOCK_BASE
    };
}

function setStock(payload) {
    return {
        payload,
        type: types.BOOKING_STOCK
    };
}

export function showEditModal(payload) {
    return {
        payload,
        type: types.BOOKING_STOCK_EDIT_SHOW
    };
}

export function closeEditModal() {
    return {
        type: types.BOOKING_STOCK_EDIT_CLOSE
    };
}

export function setNumber(payload) {
    return {
        payload,
        type: types.BOOKING_STOCK_SET_NUMBER
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

        const { nowTimeStamp, bookingDay, periodList, roomTypeList } = res;

        const dates = [];

        for (let i = -1; i < bookingDay; i += 1) {
            const day = moment.unix(nowTimeStamp).add(i, 'days');

            dates.push({
                name: day.format('ddd(MM/DD)'),
                value: day.format(dateFormat)
            });
        }

        dispatch(setQuery({ dates, periodList, roomTypeList }));
    };
}

export function fetchStock() {
    return async (dispatch, getState) => {
        const { date } = getState().routing.locationBeforeTransitions.query;

        if (!date) {
            const newDate = moment().format(dateFormat);
            dispatch(updateQuery({ date: newDate }));
            return;
        }

        let stockList;

        try {
            stockList = await get(BOOKING_STOCK_SEARCH, { date });
        } catch (e) {
            return;
        }

        dispatch(setStock(stockList));
    };
}

export function editStock() {
    return async (dispatch, getState) => {
        const { bookingStock, routing } = getState();
        const { roomTypeId, periodId, currentStock } = bookingStock;
        const { date } = routing.locationBeforeTransitions.query;

        const params = {
            roomTypeId,
            date,
            roomPeriodId: periodId,
            stockCount: currentStock
        };

        try {
            await post(BOOKING_STOCK_EDIT, params);
        } catch (e) {
            return;
        }

        message.success('修改成功!');
        dispatch(closeEditModal());
        dispatch(fetchStock());
    };
}
