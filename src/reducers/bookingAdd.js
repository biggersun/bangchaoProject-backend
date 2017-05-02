import * as actionTypes from 'constants/actionTypes';

const initState = {
    roomDateList: [],
    roomPeriodList: [],
    roomTypeList: [],
    comboList: [],
    comboQuery: [],
    exitError: false,
    repeatRoom: false,
    repeatComboIds: []
};

export default function bookingAdd(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.BOOKING_ADD_QUERY: {
        const { roomDateList, roomPeriodList, roomTypeList } = payload;
        return {
            ...state,
            roomDateList,
            roomPeriodList,
            roomTypeList
        };
    }
    case actionTypes.BOOKING_ADD_COMBO_LIST:
        return {
            ...state,
            comboList: payload
        };
    case actionTypes.BOOKING_ADD_COMBO_QUERY:
        return {
            ...state,
            comboQuery: payload
        };
    case actionTypes.BOOKING_ADD_COMBO_DELETE: {
        const comboList = [...state.comboList];
        const index = comboList.findIndex(combo => combo.comboId === payload);

        comboList.splice(index, 1);

        return {
            ...state,
            comboList
        };
    }
    case actionTypes.BOOKING_ADD_COMBO_ADD: {
        const comboList = [...state.comboList];

        comboList.push(payload);

        return {
            ...state,
            comboList
        };
    }
    case actionTypes.BOOKING_ADD_COMBO_SET: {
        const comboList = [...state.comboList];
        const index = comboList.findIndex(combo => combo.comboId === payload.comboId);

        comboList[index] = payload.combo;

        return {
            ...state,
            comboList
        };
    }
    case actionTypes.BOOKING_ADD_COMBO_ERROR: {
        const { repeatRoom, repeatComboIds } = payload;

        return {
            ...state,
            repeatRoom,
            repeatComboIds,
            exitError: true
        };
    }
    case actionTypes.BOOKING_ADD_COMBO_ERROR_RESET: {
        return {
            ...state,
            exitError: false
        };
    }
    default:
        return state;
    }
}

