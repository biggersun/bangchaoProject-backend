import {
    ORDER_LIST_SUCCESS,
    ORDER_DETAIL_SUCCESS,
    ORDER_REFUND_SHOW,
    ORDER_REFUND_CLOSE,
    ORDER_LIST_RESET
} from 'constants/actionTypes';

const initState = {
    total: 0,
    list: [],
    orderDetail: {
        bookingInfo: {},
        goodsInfo: [],
        couponInfo: {}
    },
    showModal: false,
    refundInfo: { }
};

export default function orderList(state = initState, action) {
    switch (action.type) {
    case ORDER_LIST_SUCCESS: {
        const { orders, total } = action.res;

        return {
            ...state,
            list: orders,
            total
        };
    }
    case ORDER_LIST_RESET: {
        return {
            ...state,
            list: [],
            total: 0
        };
    }
    case ORDER_DETAIL_SUCCESS: {
        return {
            ...state,
            orderDetail: action.res
        };
    }
    case ORDER_REFUND_SHOW: {
        return {
            ...state,
            showModal: true,
            refundInfo: action.payload
        };
    }
    case ORDER_REFUND_CLOSE:
        return {
            ...state,
            showModal: false
        };
    default:
        return state;
    }
}
