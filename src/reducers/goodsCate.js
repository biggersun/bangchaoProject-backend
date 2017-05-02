import {
    GOODS_CATE_FETCH_SUCCESS,
    GOODS_CATE_SAVE_SUCCESS,
    GOODS_CATE_MODAL_OPEN,
    GOODS_CATE_MODAL_CANCEL,
    GOODS_CATE_CAN_DELETE,
    GOODS_CATE_CANT_DELETE
} from 'constants/actionTypes';

const initState = {
    cateList: [],
    cateModalVisible: false
};

export default function goodsCate(state = initState, action) {
    switch (action.type) {
    case GOODS_CATE_FETCH_SUCCESS:
        return {
            ...state,
            cateList: action.res
        };
    case GOODS_CATE_MODAL_OPEN:
        return {
            ...state,
            cateModalVisible: true
        };
    case GOODS_CATE_MODAL_CANCEL:
        return {
            ...state,
            cateModalVisible: false
        };
    case GOODS_CATE_SAVE_SUCCESS:
        return {
            ...state,
            cateList: action.res,
            cateModalVisible: false
        };
    case GOODS_CATE_CAN_DELETE:
        return {
            ...state,
            canDelete: true,
            canDeleteId: action.id
        };
    case GOODS_CATE_CANT_DELETE:
        return {
            ...state,
            canDelete: false,
            canDeleteId: action.id
        };
    default:
        return state;
    }
}
