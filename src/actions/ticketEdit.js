import * as api from 'constants/api';
import * as actionTypes from 'constants/actionTypes';
import { post, get } from 'assets/js/request';
import { push } from 'react-router-redux';
import { message } from 'antd';
import { actionCreator } from 'assets/js/util';
import { fetchSugList } from './ticket';

const finishCopy = actionCreator(actionTypes.TICKET_COPY);

// 券新增
export function submit(params) {
    return async (dispatch) => {
        try {
            await post(api.TICKET_ADD, params);
        } catch (e) {
            return;
        }

        message.success('新增成功');
        dispatch(fetchSugList());
        dispatch(push('/ticket-list'));
    };
}

// 券 复制
export function fetchCopy(opts = {}) {
    return async (dispatch) => {
        const params = opts;
        let payload = {};

        // 有券id 获取券详情
        if (params.id) {
            try {
                payload = await get(api.TICKET_COPY, params);
            } catch (e) {
                return;
            }
        }

        dispatch(finishCopy(payload));
    };
}
