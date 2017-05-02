import React from 'react';
import { Card } from 'antd';

import {
    QIANTAI_TAIKA_QR_DOWNLOAD,
    QIANTAI_SHOUKUAN_QR_DOWNLOAD,
    CHAOSHI_TAIKA_QR_DOWNLOAD,
    CHAOSHI_SHOUKUAN_QR_DOWNLOAD
 } from 'constants/api';

import './index.scss';

function MeterialList() {
    return (
        <section className="meterial-container">
            <Card title="前台收款" style={{ width: '100%', marginBottom: '10px' }}>
                <a
                    href={QIANTAI_TAIKA_QR_DOWNLOAD}
                    className="download"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    下载收款台卡(A5)
                </a>
                <a
                    href={QIANTAI_SHOUKUAN_QR_DOWNLOAD}
                    className="download"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    下载收款二维码
                </a>
            </Card>
            <Card title="超市收款" style={{ width: '100%', marginBottom: '10px' }}>
                <a
                    href={CHAOSHI_TAIKA_QR_DOWNLOAD}
                    className="download"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    下载收款台卡(A5)
                </a>
                <a
                    href={CHAOSHI_SHOUKUAN_QR_DOWNLOAD}
                    className="download"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    下载收款二维码
                </a>
            </Card>
            <Card title="耗材购买推荐" style={{ width: '100%', marginBottom: '10px' }}>
                <a
                    href="http://item.jd.com/1012849.html"
                    className="download"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    打印纸低价购买
                </a>
                <a
                    href="https://detail.tmall.com/item.htm?id=20512559887&spm=a1z09.2.0.0.nm71Pz&_u=9lajtpd35f2"
                    className="download"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    L型台卡(A5)低价购买
                </a>
                <a
                    href="https://detail.tmall.com/item.htm?id=530949154296&spm=a1z09.2.0.0.nm71Pz&_u=9lajtpd64d8"
                    className="download"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    T型台卡(A6)低价购买
                </a>
            </Card>
        </section>
    );
}

export default MeterialList;
