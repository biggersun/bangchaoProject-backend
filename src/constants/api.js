const prefix = '/api';

export const ACCOUNT_INFO = `${prefix}/account/info`;
export const ACCOUNT_LOGIN = `${prefix}/account/login`;
export const ACCOUNT_LOGOUT = `${prefix}/account/logout`;
export const MODIFY_PASSWD = `${prefix}/account/mod-password`;
export const GET_CAPITAL = `${prefix}/capital/view`;
export const MERCHANT_LIST = `${prefix}/merchant/index`;
export const COMMISSION_LIST = `${prefix}/cr/view-merchant`;
export const SAVE_RELATEID_API = `${prefix}/merchant/set-poi`;
export const SAVE_RATE_API = `${prefix}/cr/mod-merchant`;
export const FETCH_LOG_API = `${prefix}/cr/view-log`;

export const GOODS_LIST = `${prefix}/goods/goods-merchant/index`;
export const GOODS_CATE = `${prefix}/goods/goods-category/index`;
export const GOODS_STATUS = `${prefix}/goods/goods-merchant/online`;
export const GOODS_DELETE = `${prefix}/goods/goods-merchant/delete`;
export const FETCH_GOODS_BASE_LIST = `${prefix}/goods/goods-basic/index`;

export const GOODS_ADD = `${prefix}/goods/goods-merchant/add`;
export const GOODS_EDIT = `${prefix}/goods/goods-merchant/edit`;
export const GOODS_SHOW = `${prefix}/goods/goods-merchant/view`;
export const UPLOAD_FILE = `${prefix}/common/picture/upload`;
export const UPLOAD_FILE_OPTIMIZE = `${prefix}/common/picture/upload?type=1`;

export const GOODS_CATE_SAVE = `${prefix}/goods/goods-category/change`;
export const GOODS_CATE_CHECK_DELETE = `${prefix}/goods/goods-category/check-delete`;

export const FETCH_ROOM_TYPE_LIST = `${prefix}/setting/room/list-type`;

// export const TUAN_LIST = `${prefix}/goods/groupon/index`;
// export const TUAN_STATUS = `${prefix}/goods/groupon/change`;
// export const TUAN_ADD = `${prefix}/goods/groupon/add`;
// export const TUAN_EDIT = `${prefix}/goods/groupon/edit`;
// export const TUAN_SHOW = `${prefix}/goods/groupon/view`;

export const TUAN_VERIFY_LIST = `${prefix}/trade/order/index`;
export const TUAN_VERIFY = `${prefix}/trade/order/verify`;
export const TUAN_VERIFY_CODES = `${prefix}/trade/order/get-codes`;

export const BOOKING_VERIFY_LIST = `${prefix}/trade/order/booking-query`;
export const BOOKING_VERIFY = `${prefix}/trade/order/booking-verify`;
export const BOOKING_DATE_PERIOD = `${prefix}/goods/goods-manage/date-period-room`;
export const BOOKING_COMBOS = `${prefix}/goods/goods-manage/find-booking`;
export const BOOKING_COMBO_DELETE = `${prefix}/goods/goods-manage/delete-booking`;
export const BOOKING_ROOM_TYPE_LIST = `${prefix}/goods/goods-manage/find-room-type`;
export const BOOKING_GOODS_COMBO_LIST = `${prefix}/goods/goods-manage/find-combo`;
export const BOOKING_COMBO_EDIT = `${prefix}/goods/goods-manage/edit-booking`;
export const BOOKING_FETCH_DATE = `${prefix}/goods/goods-manage/find-date`;
export const BOOKING_ADD_DATE = `${prefix}/goods/goods-manage/add-date`;
export const BOOKING_DELETE_DATE = `${prefix}/goods/goods-manage/delete-date`;
export const BOOKING_FETCH_PERIOD = `${prefix}/goods/goods-manage/find-period`;
export const BOOKING_ADD_PERIOD = `${prefix}/goods/goods-manage/add-period`;
export const BOOKING_DELETE_PERIOD = `${prefix}/goods/goods-manage/delete-period`;
export const BOOKING_FETCH_DAYS = `${prefix}/goods/goods-manage/find-booking-day`;
export const BOOKING_EDIT_DAYS = `${prefix}/goods/goods-manage/edit-booking-day`;
export const BOOKING_STOCK_SEARCH = `${prefix}/stock/booking/query`;
export const BOOKING_STOCK_EDIT = `${prefix}/stock/booking/edit`;
export const BOOKING_STOCK_QUERY = `${prefix}/stock/booking/base`;
export const BOOKING_STOCK_TPL_SEARCH = `${prefix}/stock/booking/query-tpl`;
export const BOOKING_STOCK_TPL_EDIT = `${prefix}/stock/booking/edit-tpl`;
export const BOOKING_ROOM_TYPE_ADD = `${prefix}/goods/goods-manage/add-room-type`;
export const BOOKING_ROOM_TYPE_DELETE = `${prefix}/goods/goods-manage/delete-room-type`;
export const BOOKING_COMBOS_LIST = `${prefix}/goods/goods-manage/find-combo`;
export const BOOKING_COMBOS_DELETE = `${prefix}/goods/goods-manage/delete-combo`;
export const BOOKING_COMBOS_ADD = `${prefix}/goods/goods-manage/add-combo`;
export const BOOKING_COMBOS_EDIT = `${prefix}/goods/goods-manage/edit-combo`;
export const BOOKING_COMBOS_FIND = `${prefix}/goods/goods-manage/find-one-combo`;
export const BOOKING_ADD = `${prefix}/goods/goods-manage/add-booking`;
export const BOOKING_REFUND_EDIT = `${prefix}/goods/goods-manage/edit-booking-refund-time`;
export const BOOKING_FETCH_ARRIVE_PERIOD = `${prefix}/goods/goods-manage/find-latest-arrive-period`;
export const BOOKING_ADD_ARRIVE_PERIOD = `${prefix}/goods/goods-manage/add-latest-arrive-period`;

export const AVATAR_GET = `${prefix}/agent/agent`;

export const FETCH_ORDER_LIST = `${prefix}/trade/order/index`;
export const FETCH_ORDER_TOTAL = `${prefix}/trade/order-stat/query`;
export const ORDER_TOTAL_PRINT = `${prefix}/trade/order-stat/print`;

export const FETCH_SERVICE_LIST = `${prefix}/service/call/index`;

export const FETCH_ORDER_DETAIL = `${prefix}/trade/order/detail`;

export const ORDER_LIST_PRINT = `${prefix}/trade/order/print`;
export const ORDER_REFUND_DETAIL = `${prefix}/trade/refund/detail`;
export const ORDER_REFUND = `${prefix}/trade/refund/apply`;

export const FETCH_SETTLEMENT_LIST = `${prefix}/finance/settlement-query`;

export const SETTLEMENT_DOWNLOAD = `${prefix}/finance/statement-download`;
export const ORDER_DOWNLOAD = `${prefix}/finance/order-download`;

export const ACTIVITY_LIST_FETCH = `${prefix}/activity/common/index`;
export const ACTIVITY_STATUS_CHANGE = `${prefix}/activity/common/change-status`;
export const ACTIVITY_DELETE = `${prefix}/activity/common/delete`;
export const ACTIVITY_INFO_FETCH = `${prefix}/activity/common/view`;
export const ACTIVITY_INFO_ADD = `${prefix}/activity/common/add`;
export const ACTIVITY_INFO_EDIT = `${prefix}/activity/common/edit`;

export const CHANNEL_LIST_FETCH = `${prefix}/tp/channel/index`;
export const CHANNEL_INFO_STATUS_CHANGE = `${prefix}/tp/channel/set-status`;

export const COMMISSION_LIST_FETCH = `${prefix}/tp/cr/index`;
export const COMMISSION_INFO_SURE = `${prefix}/tp/cr/confirm`;
export const COMMISSION_INFO_REASON_SAVE = `${prefix}/tp/cr/refuse`;

export const STOCK_LIST_FETCH = `${prefix}/setting/stock/index`;
export const STOCK_LIST_CHANGE_STOCK = `${prefix}/setting/stock/set`;
export const EMPLOYEE_LIST_FETCH = `${prefix}/setting/employee/index`;

export const EMPLOYEE_INFO_OPERATE = `${prefix}/setting/employee/edit`;
export const EMPLOYEE_ROLES_FETCH = `${prefix}/setting/employee/func-list`;
export const EMPLOYEE_SET_MANAGER = `${prefix}/prize/cashback/set-manager`;
export const EMPLOYEE_UNSET_MANAGER = `${prefix}/prize/cashback/unset-manager`;

export const EMPLOYEE_INFO_ADD = `${prefix}/setting/employee/add`;
export const EMPLOYEE_INFO_EDIT = `${prefix}/setting/employee/edit`;
export const EMPLOYEE_CARD_BIND = `${prefix}/prize/cashback/bind-qrcode`;
export const EMPLOYEE_CARD_UNBIND = `${prefix}/prize/cashback/unbind-qrcode`;
export const EMPLOYEE_CARD_DOWNLOAD = `${prefix}/common/qr/batch-unbound-card`;
export const EMPLOYEE_MSG_SHOW = `${prefix}/setting/employee/index-message`;
export const EMPLOYEE_MSG_SET = `${prefix}/setting/employee/set-message`;

export const ROOM_LIST_FETCH = `${prefix}/setting/room/list-room`;
export const ROOM_LIST_DELETE = `${prefix}/setting/room/delete-room`;

export const QR_DOWNLOAD = `${prefix}/common/qr/download`;
export const QR_BATCH_DOWNLOAD = `${prefix}/common/qr/batch-download`;
export const ROOM_INFO_ADD = `${prefix}/setting/room/add-room`;
export const ROOM_CATE_EDIT = `${prefix}/setting/room/save-type`;
export const ROOM_TYPE_CAN_DELETE = `${prefix}/setting/room/delete-type`;

export const MESSAGELIST_FETCH = `${prefix}/setting/phonerp/index`;
export const SEND_MESSAGE = `${prefix}/setting/phonerp/send-message`;
export const BRAND_MERCHANT_LIST_FETCH = `${prefix}/setting/phonerp/brand-merchants`;

export const QIANTAI_TAIKA_QR_DOWNLOAD = `${prefix}/common/qr/download?type=110&c=4`;
export const QIANTAI_SHOUKUAN_QR_DOWNLOAD = `${prefix}/common/qr/download?type=110&c=5`;
export const CHAOSHI_TAIKA_QR_DOWNLOAD = `${prefix}/common/qr/download?type=120&c=4`;
export const CHAOSHI_SHOUKUAN_QR_DOWNLOAD = `${prefix}/common/qr/download?type=120&c=5`;

export const DOWNLOAD_CHEST_CARD = `${prefix}/prize/cashback/download`;

export const FINANCE_ACCOUNT = `${prefix}/finance/draw-money/account-balance`;
export const FINANCE_DRAW_LIST = `${prefix}/finance/draw-money/draw-list`;
export const FINANCE_DRAW_SUBMIT = `${prefix}/finance/draw-money/draw-submit`;
export const FINANCE_DRAW_HISTORY = `${prefix}/finance/draw-money/draw-history`;

export const CHANNEL_TYPE_FETCH = `${prefix}/tp/channel/get-tp-types`;

export const MEMBER_SWITCH = `${prefix}/member/merchant/set-apply-status`;
export const MEMBER_RULES_INFO = `${prefix}/member/merchant/apply-info`;
export const MEMBER_SET_CONDITION = `${prefix}/member/merchant/set-apply-condition`;
export const MEMBER_SET_LOG = `${prefix}/member/merchant/get-apply-log`;
export const MEMBER_SET_TOP_UP = `${prefix}/member/merchant/set-vcard`;
export const MEMBER_PRICE_SHOW = `${prefix}/member/merchant/get-memberprice`;
export const MEMBER_PRICE_SET = `${prefix}/member/merchant/set-memberprice`;
export const MEMBER_LIST = `${prefix}/member/muser/user-list`;
export const MEMBER_ORDER_LIST = `${prefix}/member/muser/vcard-order-list`;
export const MEMBER_OFFLINE_LIST = `${prefix}/member/muser/index-offline`;
export const MEMBER_OFFLINE_ADD = `${prefix}/member/muser/add-offline`;
export const MEMBER_OTHER_INFO_SHOW = `${prefix}/member/merchant/get-other-info`;
export const MEMBER_OTHER_INFO_SET = `${prefix}/member/merchant/set-other-info`;

export const TICKET_ACTIVITY_ACTIVE_LIST = `${prefix}/gift/act/merchant-list`;
export const TICKET_ACTIVITY_CONFIG = `${prefix}/gift/act-config/show-act-config`;
export const TICKET_ACTIVITY_CONFIG_EDIT = `${prefix}/gift/act-config/edit-act-config`;
export const TICKET_ACTIVITY_USAGE = `${prefix}/gift/use-history/index`;
export const TICKET_ACTIVITY_LIST = `${prefix}/gift/act/index`;
export const TICKET_ACTIVITY_OFFLINE = `${prefix}/gift/act/offline`;
export const TICKET_ACTIVITY = `${prefix}/gift/act/detail`;
export const TICKET_ACTIVITY_ADD = `${prefix}/gift/act/add`;
export const TICKET_ACTIVITY_EDIT = `${prefix}/gift/act/edit`;
export const TICKET_ACTIVITY_PRINT = `${prefix}/gift/use-history/detail-print`;

export const TICKET_LIST = `${prefix}/gift/tpl/index`;
export const TICKET_DELETE = `${prefix}/gift/tpl/delete`;
export const TICKET_ADD = `${prefix}/gift/tpl/add`;
export const TICKET_VIEW = `${prefix}/gift/tpl/view`;
export const TICKET_COPY = `${prefix}/gift/tpl/copy`;

export const TICKET_VERIFY_LIST = `${prefix}/gift/card/index`;
export const TICKET_VERIFY_VERIFY = `${prefix}/gift/card/verify`;
export const TICKET_VERIFY_PRINT = `${prefix}/gift/card/verify-print`;

export const QRCODE_LIST_FETCH = `${prefix}/setting/room/bind-index`;
export const QRCODE_BATCH_DOWNLOAD = `${prefix}/setting/room/batch-download`;
export const QRCODE_NUMBER_BIND = `${prefix}/setting/room/bind-edit`;
export const QRCODE_NUMBER_UNBIND = `${prefix}/setting/room/remove-bind`;

export const WAITER_SET_LIST = `${prefix}/setting/reward/index`;
export const WAITER_SET_MODIFY_LIST = `${prefix}/setting/reward/add`;

export const TUAN_FETCH_DATE = `${prefix}/goods/groupon-manage/find-date`;
export const TUAN_ADD_DATE = `${prefix}/goods/groupon-manage/add-date`;
export const TUAN_DELETE_DATE = `${prefix}/goods/groupon-manage/delete-date`;

export const TUAN_LIST = `${prefix}/goods/groupon-new/index`;
export const TUAN_STATUS = `${prefix}/goods/groupon-new/change`;
export const TUAN_DELETE = `${prefix}/goods/groupon-new/delete`;

export const TUAN_FETCH_PERIOD = `${prefix}/goods/groupon-manage/find-period`;
export const TUAN_ADD_PERIOD = `${prefix}/goods/groupon-manage/add-period`;
export const TUAN_DELETE_PERIOD = `${prefix}/goods/groupon-manage/delete-period`;

export const GROUPON_COMBO_LIST = `${prefix}/goods/groupon-manage/find-combo`;
export const GROUPON_COMBO = `${prefix}/goods/groupon-manage/find-one-combo`;
export const GROUPON_COMBO_ADD = `${prefix}/goods/groupon-manage/add-combo`;
export const GROUPON_COMBO_DELETE = `${prefix}/goods/groupon-manage/delete-combo`;
export const GROUPON_COMBO_EDIT = `${prefix}/goods/groupon-manage/edit-combo`;

export const GROUPON = `${prefix}/goods/groupon-new/find`;
export const GROUPON_ADD = `${prefix}/goods/groupon-new/add`;
export const FEEDBACK_LIST = `${prefix}/feedback/index`;

export const DIRNKS_LIST = `${prefix}/dbstat/drinks-order-rp-stat/index`;

export const SELL_COUNT_LIST = `${prefix}/dbstat/sale-goods-stat/index`;

export const WAITER_REWARD_LIST = `${prefix}/dbstat/reward-stat/index`;
