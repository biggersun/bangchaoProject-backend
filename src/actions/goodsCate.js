import {
    GOODS_CATE_FETCH_SUCCESS,
    GOODS_CATE_SAVE_SUCCESS,
    GOODS_CATE_MODAL_OPEN,
    GOODS_CATE_MODAL_CANCEL,
    GOODS_CATE_CAN_DELETE,
    GOODS_CATE_CANT_DELETE
} from 'constants/actionTypes';

import { GOODS_CATE, GOODS_CATE_SAVE, GOODS_CATE_CHECK_DELETE } from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

export function fetchCate() {
    return async (dispatch) => {
        let res;
        try {
            res = await get(GOODS_CATE);
        } catch (e) {
            return;
        }

        dispatch({
            res,
            type: GOODS_CATE_FETCH_SUCCESS
        });
    };
}

export function cateSave(list) {
    return async (dispatch) => {
        let res;
        try {
            res = await post(GOODS_CATE_SAVE, { info: JSON.stringify(list) });
        } catch (e) {
            return;
        }

        dispatch({
            res,
            type: GOODS_CATE_SAVE_SUCCESS
        });
    };
}

export function openCateModal() {
    return {
        type: GOODS_CATE_MODAL_OPEN
    };
}

export function cancelCateModal() {
    return {
        type: GOODS_CATE_MODAL_CANCEL
    };
}

export function cateCheckDelete(categoryId) {
    return async (dispatch) => {
        let res;

        try {
            res = await post(GOODS_CATE_CHECK_DELETE, { categoryId });
        } catch (e) {
            return;
        }

        if (!res.canDelete) {
            message.error('当前分类被使用，无法删除');
        }

        dispatch({
            res,
            id: categoryId,
            type: res.canDelete ? GOODS_CATE_CAN_DELETE : GOODS_CATE_CANT_DELETE
        });
    };
}

