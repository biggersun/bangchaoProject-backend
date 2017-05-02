import { routerReducer, LOCATION_CHANGE } from 'react-router-redux';
import moment from 'moment';

export default function routing(state, action) {
    if (action.type === LOCATION_CHANGE) {
        switch (action.payload.pathname) {

        case '/booking-verify': {
            const { query = {} } = action.payload;

            if (!query.date) {
                query.date = moment().format('YYYY-MM-DD');
                action.payload.query = query; // eslint-disable-line no-param-reassign
            }
            break;
        }
        case '/settlement/withdraw/history': {
            const { query = {} } = action.payload;

            if (!query.endTime) {
                query.endTime = moment({ hour: 0 }).unix();
            }

            if (!query.startTime) {
                query.startTime = moment.unix(query.endTime).subtract(1, 'months').unix();
            }


            action.payload.query = query; // eslint-disable-line no-param-reassign
            break;
        }
        default:
        }
    }

    return routerReducer(state, action);
}
