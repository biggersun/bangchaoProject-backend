import {
    ROOM_TYPE_LIST_SUCCESS,
    ROOM_LIST_FETCH_SUCCESS,
    ROOM_LIST_MODAL_CANCEL,
    ROOM_LIST_MODAL_SHOW,
    ROOM_CATE_MODAL_CANCEL,
    ROOM_CATE_MODAL_SHOW
} from 'constants/actionTypes';

import {
    FETCH_ROOM_TYPE_LIST,
    ROOM_LIST_FETCH,
    ROOM_LIST_DELETE,
    ROOM_CATE_EDIT,
    ROOM_TYPE_CAN_DELETE,
    ROOM_INFO_ADD
} from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function finishRequest(res) {
    return {
        res,
        type: ROOM_TYPE_LIST_SUCCESS
    };
}

export function cancelRoomModal() {
    return {
        type: ROOM_LIST_MODAL_CANCEL
    };
}

export function showRoomModal() {
    return {
        type: ROOM_LIST_MODAL_SHOW
    };
}

export function cancelCateModal() {
    return {
        type: ROOM_CATE_MODAL_CANCEL
    };
}

export function showCateModal() {
    return {
        type: ROOM_CATE_MODAL_SHOW
    };
}

export function fetchRoomTypeList() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(FETCH_ROOM_TYPE_LIST, {});
        } catch (e) {
            message.error('获取房型失败！');
            return;
        }

        dispatch(finishRequest(res));
    };
}

export function fetchListRoom() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(ROOM_LIST_FETCH, {});
        } catch (e) {
            message.error('获取失败！');
            return;
        }

        dispatch({
            res,
            type: ROOM_LIST_FETCH_SUCCESS
        });
    };
}

export function saveRoomModal(info) {
    return async (dispatch) => {
        const params = Object.assign({}, info);

        params.name = info.name.join(',');

        try {
            await post(ROOM_INFO_ADD, params);
        } catch (e) {
            return;
        }

        dispatch(cancelRoomModal());
        dispatch(fetchListRoom());
    };
}

export function removeRoom(id) {
    return async (dispatch) => {
        try {
            await post(ROOM_LIST_DELETE, { id });
        } catch (e) {
            return;
        }

        dispatch(fetchListRoom());
    };
}

export function saveCateModal(info) {
    return async (dispatch) => {
        try {
            await post(ROOM_CATE_EDIT, { info: JSON.stringify(info) });
        } catch (e) {
            return;
        }

        dispatch(cancelCateModal());
        dispatch(fetchListRoom());
        dispatch(fetchRoomTypeList());
    };
}

export function cateCheckDelete(typeId, callback) {
    return async () => {
        let res;

        try {
            res = await post(ROOM_TYPE_CAN_DELETE, { typeId });
        } catch (e) {
            return;
        }

        if (!res.canDelete) {
            message.error('当前房型被使用，无法删除');
        }

        if (callback) {
            callback(res.canDelete);
        }

        // dispatch({
        //     res,
        //     id: typeId,
        //     type: res.canDelete ? ROOM_CATE_CAN_DELETE : ROOM_CATE_CANT_DELETE
        // });
    };
}

