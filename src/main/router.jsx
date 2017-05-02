import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import * as router from 'constants/router';
import { relativeToRoot } from 'assets/js/util';

import App from 'containers/App';
import GoodsList from 'containers/Goods/List';
import GoodsEdit from 'containers/Goods/Edit';
import CombosList from 'containers/Combos/List';
import CombosEdit from 'containers/Combos/Edit';

import TuanList from 'containers/Tuan/List';
import Verify from 'containers/Tuan/Verify';
import OrderList from 'containers/Order/List';
import OrderTotal from 'containers/Order/Total';
import OrderPrint from 'containers/Order/Print';

import Booking from 'containers/Booking/List';
import BookingVerify from 'containers/Booking/Verify';
import BookingDate from 'containers/Booking/Date';
import BookingPeriod from 'containers/Booking/Period';
import BookingArrivePeriod from 'containers/Booking/ArrivePeriod';
import BookingDays from 'containers/Booking/Days';
import BookingStock from 'containers/Booking/Stock';
import BookingStockTpl from 'containers/Booking/StockTpl';
import BookingRoomType from 'containers/Booking/RoomType';
import BookingCombo from 'containers/Booking/Combo';
import BookingComboEdit from 'containers/Booking/ComboEdit';
import BookingAdd from 'containers/Booking/Add';
import RefundTime from 'containers/Booking/refundTime';

import ServiceList from 'containers/Service/List';
import SettlementList from 'containers/Settlement/List';
import SettlementWithdraw from 'containers/Settlement/WithDraw';
import SettlementWithdrawHistory from 'containers/Settlement/WithDrawHistory';

import ActivityList from 'containers/Activity/List';
import ActivityEdit from 'containers/Activity/Edit';

import ChannelList from 'containers/Channel/List';
import CommissionList from 'containers/Commission/List';

import StockList from 'containers/Stock/List';
import EmployeeList from 'containers/Employee/List';
import EmployeeMsg from 'containers/Employee/Msg';

import RoomList from 'containers/Room/List';
import MeterialList from 'containers/Meterial/List';
import WaiterSetList from 'containers/waiterSet/List';

import MemberRules from 'containers/Member/Rules';
import MemberList from 'containers/Member/List';
import MemberOrderList from 'containers/Member/Order';
import MemberOfflineList from 'containers/Member/Offline/List';
import MemberOfflineNew from 'containers/Member/Offline/New';

import TicketActivity from 'containers/TicketActivity/List';
import TicketActivityEdit from 'containers/TicketActivity/Edit';
import TicketActivityNewMemberEdit from 'containers/TicketActivity/NewMemberEdit';
import TicketActivitySpendEdit from 'containers/TicketActivity/SpendEdit';
import TicketActivityRechargeEdit from 'containers/TicketActivity/RechargeEdit';
import TicketActivityConfig from 'containers/TicketActivity/Config';
import TicketActivityUsage from 'containers/TicketActivity/Usage';

import Ticket from 'containers/Ticket/List';
import TicketEdit from 'containers/Ticket/Edit';
import TicketView from 'containers/Ticket/View';

import TicketVerify from 'containers/TicketVerify/List';

import QrcodeList from 'containers/Qrcode/List';
import FeedbackList from 'containers/FeedBack/List';

import TuanDate from 'containers/Tuan/Date';
import TuanPeriod from 'containers/Tuan/Period';
import TuanComboList from 'containers/Tuan/Combo/List';
import TuanComboEdit from 'containers/Tuan/Combo/Edit';
import TuanNew from 'containers/Tuan/New';

import DrinksList from 'containers/Drinks/List';

import SellCountList from 'containers/SellCount/List';
import Telrecommendation from 'containers/Telrecommendation/List';
import WaiterRewardList from 'containers/WaiterReward/List';

export default function RouteTree({ store, indexPath }) {
    const history = syncHistoryWithStore(browserHistory, store);

    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path={router.ROOT_PATH} component={App}>
                    <IndexRedirect to={indexPath} />
                    <Route path={relativeToRoot(router.GOODS)} component={GoodsList} />
                    <Route path="goods/edit" component={GoodsEdit} />
                    <Route path="combos" component={CombosList} />
                    <Route path="combos/edit" component={CombosEdit} />
                    <Route path="tuan" component={TuanList} />
                    <Route path="verify" component={Verify} />
                    <Route path="booking" component={Booking} />
                    <Route path="booking-verify" component={BookingVerify} />
                    <Route path="booking/date" component={BookingDate} />
                    <Route path="booking/period" component={BookingPeriod} />
                    <Route path="booking/period/arrive-period" component={BookingArrivePeriod} />
                    <Route path="booking/days" component={BookingDays} />
                    <Route path="booking/stock" component={BookingStock} />
                    <Route path="booking/stock/tpl" component={BookingStockTpl} />
                    <Route path="booking/room-type" component={BookingRoomType} />
                    <Route path="booking/combo" component={BookingCombo} />
                    <Route path="booking/combo/edit" component={BookingComboEdit} />
                    <Route path="booking/add" component={BookingAdd} />
                    <Route path="booking/refundTime" component={RefundTime} />
                    <Route path="order" component={OrderList} />
                    <Route path="order/print" component={OrderPrint} />
                    <Route path="total/order" component={OrderTotal} />
                    <Route path="service" component={ServiceList} />
                    <Route path="settlement/list" component={SettlementList} />
                    <Route path="settlement/withdraw" component={SettlementWithdraw} />
                    <Route path="settlement/withdraw/history" component={SettlementWithdrawHistory} />
                    <Route path="activity" component={ActivityList} />
                    <Route path="activity/edit" component={ActivityEdit} />
                    <Route path="channel" component={ChannelList} />
                    <Route path="commission" component={CommissionList} />
                    <Route path="stock" component={StockList} />
                    <Route path="employee" component={EmployeeList} />
                    <Route path="employee/msg" component={EmployeeMsg} />
                    <Route path="room" component={RoomList} />
                    <Route path="meterial" component={MeterialList} />
                    <Route path="waiter-set" component={WaiterSetList} />
                    <Route path="member/rules" component={MemberRules} />
                    <Route path="member/list" component={MemberList} />
                    <Route path="member/list/:muserId" component={MemberOrderList} />
                    <Route path="member/offline" component={MemberOfflineList} />
                    <Route path="member/offline/new" component={MemberOfflineNew} />
                    <Route path="ticket-activity-config" component={TicketActivityConfig} />
                    <Route path="ticket-activity-usage" component={TicketActivityUsage} />
                    <Route path="ticket-list" component={Ticket} />
                    <Route path="ticket-list/edit" component={TicketEdit} />
                    <Route path="ticket-list/view" component={TicketView} />
                    <Route path="ticket-activity-list" component={TicketActivity} />
                    <Route path="ticket-activity-list/edit" component={TicketActivityEdit} />
                    <Route path="ticket-activity-list/new-member-Edit" component={TicketActivityNewMemberEdit} />
                    <Route path="ticket-activity-list/spend-edit" component={TicketActivitySpendEdit} />
                    <Route path="ticket-activity-list/recharge-edit" component={TicketActivityRechargeEdit} />
                    <Route path="ticket-verify" component={TicketVerify} />
                    <Route path="qrcode" component={QrcodeList} />
                    <Route path="tuan/date" component={TuanDate} />
                    <Route path="tuan/period" component={TuanPeriod} />
                    <Route path="tuan/combo/list" component={TuanComboList} />
                    <Route path="tuan/combo/edit" component={TuanComboEdit} />
                    <Route path="tuan/new" component={TuanNew} />
                    <Route path="feedback" component={FeedbackList} />
                    <Route path="drinks" component={DrinksList} />
                    <Route path="sell-count" component={SellCountList} />
                    <Route path="waiter-reward-count" component={WaiterRewardList} />
                    <Route path="telrecommendation" component={Telrecommendation} />
                </Route>
            </Router>
        </Provider>
    );
}
