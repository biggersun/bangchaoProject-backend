import {
    BOOKING_ROOM_TYPE_LIST,
    BOOKING_ROOM_TYPE_ADD,
    BOOKING_ROOM_TYPE_DELETE
} from 'constants/api';
import { BOOKING_ROOM_TYPE } from 'constants/actionTypes';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function setRoomTypeList(payload) {
    return {
        payload,
        type: BOOKING_ROOM_TYPE
    };
}

export function fetchRoomTypeList() {
    return async (dispatch) => {
        let roomList;

        try {
            roomList = await get(BOOKING_ROOM_TYPE_LIST);
        } catch (e) {
            return;
        }

        dispatch(setRoomTypeList(roomList));
    };
}

export function addRoomType(params) {
    return async (dispatch) => {
        try {
            await post(BOOKING_ROOM_TYPE_ADD, params);
        } catch (e) {
            return false;
        }

        message.success('添加包房成功!');
        dispatch(fetchRoomTypeList());

        return true;
    };
}

export function deleteRoomType(params) {
    return async (dispatch) => {
        try {
            await post(BOOKING_ROOM_TYPE_DELETE, params);
        } catch (e) {
            return false;
        }

        message.success('删除包房成功!');
        dispatch(fetchRoomTypeList());

        return true;
    };
}

