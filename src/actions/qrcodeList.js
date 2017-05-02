import {
    QRCODE_LIST_FETCH_SUCCESS
} from 'constants/actionTypes';

import {
    QRCODE_LIST_FETCH,
    QRCODE_BATCH_DOWNLOAD,
    QRCODE_NUMBER_BIND,
    QRCODE_NUMBER_UNBIND
} from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function finishRequest(res) {
    return {
        res,
        type: QRCODE_LIST_FETCH_SUCCESS
    };
}

export function fetchList(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({
        }, opts);

        let res;

        try {
            res = await get(QRCODE_LIST_FETCH, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(res));
    };
}

export function bindInfo(info) {
    return async (dispatch) => {
        try {
            await post(QRCODE_NUMBER_BIND, info);
        } catch (e) {
            return e;
        }

        message.success('操作成功');
        dispatch(fetchList());
        return 0;
    };
}

export function unbind(bindCode, roomId) {
    return async (dispatch) => {
        try {
            await post(QRCODE_NUMBER_UNBIND, { roomId, bindCode });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}

export function downloadInfo(downloadCount) {
    return async (dispatch) => {
        try {
            await get(QRCODE_BATCH_DOWNLOAD, { downloadCount });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}
