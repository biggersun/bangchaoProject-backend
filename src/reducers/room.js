import {
    ROOM_TYPE_LIST_SUCCESS,
    ROOM_LIST_FETCH_SUCCESS,
    ROOM_LIST_MODAL_CANCEL,
    ROOM_LIST_MODAL_SHOW,
    ROOM_CATE_MODAL_CANCEL,
    ROOM_CATE_MODAL_SHOW,
    ROOM_CATE_CAN_DELETE,
    ROOM_CATE_CANT_DELETE
} from 'constants/actionTypes';

const initState = {
    roomTypeList: [],
    roomList: [],
    roomModalVisible: false,
    cateModalVisible: false
};

export default function roomList(state = initState, action) {
    switch (action.type) {
    case ROOM_TYPE_LIST_SUCCESS:
        return {
            ...state,
            roomTypeList: action.res
        };

    case ROOM_LIST_FETCH_SUCCESS:
        return {
            ...state,
            roomList: action.res
        };

    case ROOM_LIST_MODAL_CANCEL:
        return {
            ...state,
            roomModalVisible: false
        };
    case ROOM_LIST_MODAL_SHOW:
        return {
            ...state,
            roomModalVisible: true
        };
    case ROOM_CATE_MODAL_CANCEL:
        return {
            ...state,
            cateModalVisible: false
        };
    case ROOM_CATE_MODAL_SHOW:
        return {
            ...state,
            cateModalVisible: true
        };
    case ROOM_CATE_CAN_DELETE:
        return {
            ...state,
            canDelete: true,
            canDeleteId: action.id
        };
    case ROOM_CATE_CANT_DELETE:
        return {
            ...state,
            canDelete: false,
            canDeleteId: action.id
        };
    default:
        return state;
    }
}
