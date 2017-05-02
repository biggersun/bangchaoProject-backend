import {
    BOOKING_DATE_PERIOD_LIST,
    BOOKING_DATE_PERIOD_COMBOS,
    BOOKING_COMBO_EDIT_SHOW,
    BOOKING_COMBO_EDIT_CLOSE,
    BOOKING_COMBO_ROOM_TYPE,
    BOOKING_COMBO_GOODS_COMBO,
    BOOKING_REFUND_ROOM_TYPE
} from 'constants/actionTypes';

const initState = {
    roomDateList: [],
    roomPeriodList: [],
    comboList: [],
    roomTypeList: [],
    goodsComboList: [],
    comboId: null,
    showModal: false
};

export default function booking(state = initState, { type, payload }) {
    switch (type) {
    case BOOKING_DATE_PERIOD_LIST: {
        const { roomDateList, roomPeriodList } = payload;

        return {
            ...state,
            roomDateList,
            roomPeriodList
        };
    }
    case BOOKING_DATE_PERIOD_COMBOS: {
        return {
            ...state,
            comboList: payload
        };
    }
    case BOOKING_COMBO_EDIT_SHOW:
        return {
            ...state,
            comboId: payload,
            showModal: true
        };
    case BOOKING_COMBO_EDIT_CLOSE:
        return {
            ...state,
            showModal: false
        };
    case BOOKING_COMBO_ROOM_TYPE:
        return {
            ...state,
            roomTypeList: payload
        };

    case BOOKING_REFUND_ROOM_TYPE:
        return {
            ...state,
            roomRefundTypeList: payload
        };
    case BOOKING_COMBO_GOODS_COMBO:
        return {
            ...state,
            goodsComboList: payload
        };
    default:
        return state;
    }
}
