import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get } from 'assets/js/request';

function setList(payload) {
    return {
        payload,
        type: actionTypes.MEMBER_LIST
    };
}

export function fetchList() {
    return async (dispatch, getState) => {
        const { routing, memberList } = getState();
        const {
            pageIndex,
            mobile,
            vcardMoneyStart,
            vcardMoneyEnd,
            createType
        } = routing.locationBeforeTransitions.query;
        const { pageSize } = memberList;

        const params = {
            pageIndex,
            pageSize,
            mobile,
            vcardMoneyStart: vcardMoneyStart && Number(vcardMoneyStart) * 100,
            vcardMoneyEnd: vcardMoneyEnd && Number(vcardMoneyEnd) * 100,
            createType
        };


        let res;

        try {
            res = await get(api.MEMBER_LIST, params);
        } catch (e) {
            return;
        }

        dispatch(setList(res));
    };
}
