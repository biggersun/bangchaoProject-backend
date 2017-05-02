import * as actionTypes from 'constants/actionTypes';

export const initVcardCfg = {
    topUp: [],
    usablePay: []
};

function computeSupportMember(memberStatus, memberPriceStatus) {
    if (memberStatus === 1 && memberPriceStatus === 1) {
        return 1;
    }

    return 0;
}

export default function merchantInfo(state = {}, { type, payload }) {
    switch (type) {
    case actionTypes.MEMBER_RULES_INFO: {
        const { applyStatus, applyCondition = [], vcardCfg = initVcardCfg } = payload;
        const { memberInfo } = state;

        return {
            ...state,
            supportMember: computeSupportMember(applyStatus, state.memberPriceInfo.openStatus),
            memberInfo: {
                ...memberInfo,
                applyStatus,
                applyCondition,
                vcardCfg
            }
        };
    }
    case actionTypes.MEMBER_STATUS: {
        const { memberInfo } = merchantInfo;

        return {
            ...state,
            supportMember: computeSupportMember(payload, state.memberPriceInfo.openStatus),
            memberInfo: {
                vcardCfg: initVcardCfg,
                ...memberInfo,
                applyStatus: payload
            }
        };
    }
    case actionTypes.MEMBER_PRICE: {
        return {
            ...state,
            supportMember: computeSupportMember(state.memberInfo.applyStatus, payload.openStatus),
            memberPriceInfo: payload
        };
    }
    case actionTypes.MEMBER_OTHER_INFO: {
        return {
            ...state,
            memberOtherInfo: payload
        };
    }
    default:
        return state;
    }
}
