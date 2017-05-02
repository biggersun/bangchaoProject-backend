import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function setInfo(payload) {
    return {
        payload,
        type: actionTypes.MEMBER_RULES_INFO
    };
}

function setRulesLog(payload) {
    return {
        payload,
        type: actionTypes.MEMBER_SET_RULES_LOG
    };
}

function setPrice(payload) {
    return {
        payload,
        type: actionTypes.MEMBER_PRICE
    };
}

function setOtherInfo(payload) {
    return {
        payload,
        type: actionTypes.MEMBER_OTHER_INFO
    };
}

export function changeLogPage(payload) {
    return {
        payload,
        type: actionTypes.MEMBER_SET_RULES_LOG_PAGE_INDEX
    };
}

export function setStatus(payload) {
    return {
        payload,
        type: actionTypes.MEMBER_STATUS
    };
}

export function fetchInfo() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(api.MEMBER_RULES_INFO);
        } catch (e) {
            return;
        }

        dispatch(setInfo(res));
    };
}

export function fetchRulesLog() {
    return async (dispatch, getState) => {
        const { pageIndex, pageSize } = getState().memberRules.applyLog;
        const params = { pageIndex, pageSize };

        let res;

        try {
            res = await get(api.MEMBER_SET_LOG, params);
        } catch (e) {
            return;
        }

        dispatch(setRulesLog(res));
    };
}

export function setCondition(params) {
    return async (dispatch, getState) => {
        const { pageIndex } = getState().memberRules.applyLog;

        try {
            await post(api.MEMBER_SET_CONDITION, params);
        } catch (e) {
            return;
        }

        dispatch(fetchInfo());

        if (pageIndex === 1) {
            dispatch(fetchRulesLog());
        } else {
            dispatch(changeLogPage(1));
        }

        message.success('保存成功!');
    };
}

export function setTopUpRule(params) {
    return async () => {
        try {
            await post(api.MEMBER_SET_TOP_UP, params);
        } catch (e) {
            return;
        }

        message.success('设置成功');
    };
}

export function fetchPrice() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(api.MEMBER_PRICE_SHOW);
        } catch (e) {
            return;
        }

        dispatch(setPrice(res));
    };
}

export function changePrice(params) {
    return async (dispatch) => {
        try {
            await post(api.MEMBER_PRICE_SET, params);
        } catch (e) {
            return;
        }

        dispatch(fetchPrice());

        message.success('设置成功');
    };
}

export function fetchOtherInfo() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(api.MEMBER_OTHER_INFO_SHOW);
        } catch (e) {
            return;
        }
        dispatch(setOtherInfo(res));
    };
}

export function changeOtherInfo(params) {
    return async (dispatch) => {
        try {
            await post(api.MEMBER_OTHER_INFO_SET, params);
        } catch (e) {
            return;
        }

        dispatch(fetchOtherInfo());

        message.success('设置成功');
    };
}

export function switchStatus() {
    return async (dispatch, getState) => {
        const { applyStatus: status } = getState().merchantInfo.memberInfo;

        await post(api.MEMBER_SWITCH, { status });

        dispatch(fetchInfo());
        dispatch(fetchPrice());

        message.success('设置成功');
    };
}

