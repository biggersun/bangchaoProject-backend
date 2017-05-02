import * as actionTypes from 'constants/actionTypes';

const initState = {
    goodsList: [],
    name: '',
    comboList: []
};

export default function bookingComboEdit(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.BOOKING_COMBOS_GOODS_LIST:
        return {
            ...state,
            goodsList: payload
        };
    case actionTypes.BOOKING_COMBOS_INFO:
        return {
            ...state,
            name: payload.name,
            comboList: payload.comboList,
            goodsList: state.goodsList.length > 0 ? state.goodsList : payload.packageInfo
        };
    case actionTypes.BOOKING_COMBOS_ADD:
        return {
            ...state,
            comboList: [...state.comboList, payload]
        };
    case actionTypes.BOOKING_COMBOS_DELETE: {
        const index = state.comboList.findIndex(({ goodsId }) => goodsId === payload);
        const comboList = [...state.comboList];

        comboList.splice(index, 1);

        return {
            ...state,
            comboList
        };
    }
    case actionTypes.BOOKING_COMBOS_SET_NUMBER: {
        const comboList = [...state.comboList];
        const index = comboList.findIndex(({ goodsId }) => goodsId === payload.goodsId);

        comboList[index] = payload;

        return {
            ...state,
            comboList
        };
    }
    default:
        return state;
    }
}
