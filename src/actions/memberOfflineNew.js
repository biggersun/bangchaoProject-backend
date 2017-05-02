import * as api from 'constants/api';
import { post } from 'assets/js/request';
import { message } from 'antd';
import { push } from 'react-router-redux';

export function add(params) {
    return async (dispatch) => {
        try {
            await post(api.MEMBER_OFFLINE_ADD, params);
        } catch (e) {
            return;
        }

        dispatch(push('/member/offline'));
        message.success('新增成功');
    };
}
