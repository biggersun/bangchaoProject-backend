import moment from 'moment';

export const ENV_DEVELOPMENT = process.env.NODE_ENV === 'development';

export const LOGIN_URL = '/login.html';

export const UNITS = ['瓶', '听', '罐', '扎', '壶', '份', '包', '袋', '桶'];

export const orderTypes = [
    {
        id: '100',
        name: '酒水订单',
        title: '酒水订单'
    },
    {
        id: '110',
        name: '前台收款',
        title: '前台收款'
    },
    {
        id: '120',
        name: '超市收款',
        title: '超市收款'
    },
    {
        id: '130',
        name: '团购订单',
        title: '团单订单'
    },
    {
        id: '140',
        name: '预订订单',
        title: '预订订单'
    },
    {
        id: '150',
        name: '储值充值',
        title: '储值充值'
    },
    {
        id: '160',
        name: '购买权益',
        title: '购买权益'
    }
];

export const orderStatusList = [
    {
        id: '1003',
        name: '已支付',
        title: '已支付'
    },
    {
        id: '1004',
        name: '已消费',
        title: '已消费'
    },
    {
        id: '1006',
        name: '已退款',
        title: '已退款'
    }
];


export const payTypes = {
    10: '微信支付',
    101: '现金支付',
    80: '储值余额支付'
};

export const sex = {
    1: '男',
    2: '女'
};

export const ticketType = {
    1: '代金券',
    2: '通用券'
};

export const ticketValidType = {
    1: '相对有效期',
    2: '绝对有效期'
};

export const ticketActivityStatus = {
    0: '全部',
    1: '未开始',
    2: '进行中',
    3: '已结束'
};

export const createTypeList = {
    0: '全部',
    1: '线上办理',
    2: '单独导入',
    3: '批量导入'
};
export const weeks = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

export const activityType = {
    0: '通用活动',
    1: '新会员激励',
    2: '消费激励',
    3: '储值激励'
};

export const PERMISSION = {
    refund: 15 // 退款权限
};

export const filterTimeDef = {
    startTime: moment().subtract(1, 'months').valueOf(),
    endTime: moment().valueOf()
};

export const orderFilterTimeDef = {
    startTime: moment().set({ hour: 9, minute: 0, second: 0 }).subtract(1, 'months').valueOf(),
    endTime: moment().set({ hour: 9, minute: 0, second: 0 }).valueOf()
};

export const defaultGoodsImg = 'http://img.ktvms.com/picture/default_goods_image.jpg';
