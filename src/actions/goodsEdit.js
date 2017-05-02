import { GOODS_ADD, GOODS_EDIT, GOODS_SHOW, GOODS_CATE } from 'constants/api';
import { get, post } from 'assets/js/request';
import { goBack } from 'react-router-redux';
import { message } from 'antd';
import { GOODS_CHANGE_INFO, GOODS_EDIT_CATE_SUCCESS } from 'constants/actionTypes';

import { defaultGoodsImg } from 'constants/basic';

function setBasicInfo(info) {
    return {
        type: GOODS_CHANGE_INFO,
        info
    };
}

export function fetchInfo() {
    return async (dispatch, getState) => {
        const id = getState().routing.locationBeforeTransitions.query.id;

        let res;

        if (!id) {
            res = { picUrl: defaultGoodsImg };
        } else {
            try {
                res = await get(GOODS_SHOW, { id });
            } catch (e) {
                return;
            }
        }

        dispatch(setBasicInfo(res));
    };
}

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
            type: GOODS_EDIT_CATE_SUCCESS
        });
    };
}

export function submit(info, opt) {
    return async (dispatch, getState) => {
        const id = getState().routing.locationBeforeTransitions.query.id;
        const url = id ? GOODS_EDIT : GOODS_ADD;

        try {
            await post(url, Object.assign({ goodsId: id }, info));
        } catch (e) {
            return e;
        }

        message.success(`${id ? '修改' : '新增'}成功`);

        if (Number(opt) === 1) {
            return;
        }

        dispatch(goBack());
    };
}
