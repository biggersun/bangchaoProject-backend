import { GOODS_ADD, GOODS_EDIT, GOODS_SHOW } from 'constants/api';
import { get, post } from 'assets/js/request';
import { push } from 'react-router-redux';
import { message } from 'antd';
import { COMBOS_CHANGE_INFO } from 'constants/actionTypes';

import { defaultGoodsImg } from 'constants/basic';

function setBasicInfo(info) {
    return {
        type: COMBOS_CHANGE_INFO,
        info
    };
}

export function clearStore() {
    return {
        type: COMBOS_CHANGE_INFO,
        info: { picUrl: defaultGoodsImg }
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

export function submit(info) {
    return async (dispatch, getState) => {
        const id = getState().routing.locationBeforeTransitions.query.id;
        const url = id ? GOODS_EDIT : GOODS_ADD;


        try {
            await post(url, Object.assign({ goodsId: id, type: 2 }, info));
        } catch (e) {
            return;
        }

        message.success(`${id ? '修改' : '新增'}成功`);
        dispatch(push('/combos'));
    };
}
