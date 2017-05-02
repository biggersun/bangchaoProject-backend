import {
    BOOKING_DATE_PERIOD_LIST,
    BOOKING_DATE_PERIOD_COMBOS,
    BOOKING_COMBO_EDIT_SHOW,
    BOOKING_COMBO_EDIT_CLOSE,
    BOOKING_COMBO_ROOM_TYPE,
    BOOKING_COMBO_GOODS_COMBO
} from 'constants/actionTypes';

import {
    BOOKING_DATE_PERIOD,
    BOOKING_COMBOS,
    BOOKING_COMBO_DELETE,
    BOOKING_ROOM_TYPE_LIST,
    BOOKING_GOODS_COMBO_LIST,
    BOOKING_COMBO_EDIT,
    BOOKING_REFUND_EDIT
} from 'constants/api';
import { message } from 'antd';
import { get, post } from 'assets/js/request';
import { updateQuery } from './router';

function setDateAndPeriod(payload) {
    return {
        payload,
        type: BOOKING_DATE_PERIOD_LIST
    };
}

function setCombos(payload) {
    return {
        payload,
        type: BOOKING_DATE_PERIOD_COMBOS
    };
}

export function showEditModal(payload) {
    return {
        payload,
        type: BOOKING_COMBO_EDIT_SHOW
    };
}

export function closeEditModal() {
    return {
        type: BOOKING_COMBO_EDIT_CLOSE
    };
}

function setRoomTypeList(payload) {
    return {
        payload,
        type: BOOKING_COMBO_ROOM_TYPE
    };
}

function setGoodsComboList(payload) {
    return {
        payload,
        type: BOOKING_COMBO_GOODS_COMBO
    };
}

export function initDateIdAndPeriodId() {
    return (dispatch, getState) => {
        const { booking, routing: { locationBeforeTransitions } } = getState();
        const { roomDateList, roomPeriodList } = booking;
        const { roomDateId, roomPeriodId } = locationBeforeTransitions.query;

        if (roomDateId && roomPeriodId) {
            return;
        }

        const dateId = roomDateList[0].roomDateId;
        const periodId = roomPeriodList[0].roomPeriodId;

        if (!dateId) {
            message.error('您还没有设置日期，请先设置日期!');
        }

        if (!periodId) {
            message.error('您还没有设置时段，请先设置时段');
        }

        dispatch(updateQuery({
            roomDateId: roomDateId || dateId,
            roomPeriodId: roomPeriodId || periodId
        }));
    };
}


function fetchDateAndPeriod() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(BOOKING_DATE_PERIOD);
        } catch (e) {
            return;
        }

        const { roomDateList, roomPeriodList } = res;

        dispatch(setDateAndPeriod({ roomDateList, roomPeriodList }));
        dispatch(initDateIdAndPeriodId());
    };
}


function fetchRoomTypeList() {
    return async (dispatch) => {
        let roomTypeList;

        try {
            roomTypeList = await get(BOOKING_ROOM_TYPE_LIST, {}, { needLoading: false });
        } catch (e) {
            return;
        }


        dispatch(setRoomTypeList(roomTypeList));
    };
}

function fetchGoodsComboList() {
    return async (dispatch) => {
        let goodsComboList;

        try {
            goodsComboList = await get(BOOKING_GOODS_COMBO_LIST, {}, { needLoading: false });
        } catch (e) {
            return;
        }

        dispatch(setGoodsComboList(goodsComboList));
    };
}

export function initBasicData() {
    return (dispatch) => {
        dispatch(fetchDateAndPeriod());
        dispatch(fetchRoomTypeList());
        dispatch(fetchGoodsComboList());
    };
}

export function fetcahRoomTypeList() {
    return (dispatch) => {
        dispatch(fetchRoomTypeList());
    };
}
export function fetchCombos() {
    return async (dispatch, getState) => {
        const { roomDateId, roomPeriodId } = getState().routing.locationBeforeTransitions.query;

        if (!roomDateId || !roomPeriodId) {
            return;
        }

        let combos;

        try {
            combos = await get(BOOKING_COMBOS, { roomDateId, roomPeriodId });
        } catch (e) {
            return;
        }

        dispatch(setCombos(combos));
    };
}

export function deleteCombo(id) {
    return async (dispatch) => {
        try {
            await post(BOOKING_COMBO_DELETE, { id }, { needLoading: false });
        } catch (e) {
            return;
        }

        dispatch(fetchCombos());
        message.success('删除成功');
    };
}

export function editCombo(params) {
    return async (dispatch) => {
        try {
            await post(BOOKING_COMBO_EDIT, params);
        } catch (e) {
            return;
        }

        dispatch(fetchCombos());
        dispatch(closeEditModal());
        message.success('修改成功');
    };
}

export function editBookingRefund(params) {
    return async (dispatch) => {
        try {
            await post(BOOKING_REFUND_EDIT, params);
        } catch (e) {
            return;
        }

        dispatch(fetcahRoomTypeList());
        dispatch(closeEditModal());
        message.success('修改成功');
    };
}
