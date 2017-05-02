import * as types from 'constants/actionTypes';

const initState = {
    periodList: [],
    roomTypeList: [],
    stockList: [],
    modalVisible: false,
    roomTypeId: null,
    periodId: null,
    currentStock: 0
};

export default function bookingStock(state = initState, { type, payload }) {
    switch (type) {
    case types.BOOKING_STOCK_TPL_BASE: {
        const { periodList, roomTypeList } = payload;
        return {
            ...state,
            periodList,
            roomTypeList
        };
    }
    case types.BOOKING_STOCK_TPL: {
        return {
            ...state,
            stockList: payload
        };
    }
    case types.BOOKING_STOCK_TPL_EDIT_SHOW: {
        const { roomTypeId, periodId, currentStock } = payload;

        return {
            ...state,
            roomTypeId,
            periodId,
            currentStock,
            modalVisible: true
        };
    }
    case types.BOOKING_STOCK_TPL_EDIT_CLOSE:
        return {
            ...state,
            modalVisible: false,
            roomTypeId: null,
            periodId: null
        };
    case types.BOOKING_STOCK_TPL_SET_NUMBER:
        return {
            ...state,
            currentStock: payload
        };
    default:
        return state;
    }
}
