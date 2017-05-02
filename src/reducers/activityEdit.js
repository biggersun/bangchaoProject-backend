import {
    ACTIVITY_INFO_FETCH_SUCCESS
} from 'constants/actionTypes';

import moment from 'moment';


export default function activityEdit(state = {}, action) {
    switch (action.type) {
    case ACTIVITY_INFO_FETCH_SUCCESS: {
        const info = action.info;

        const data = Object.assign({}, info);

        if (info.beginTime) {
            data.beginTime = moment(info.beginTime);
        }

        if (info.endTime) {
            data.endTime = moment(info.endTime);
        }

        if (info.ruleJson) {
            data.ruleJson = JSON.parse(info.ruleJson);
        }

        return data;
    }
    default:
        return state;
    }
}

