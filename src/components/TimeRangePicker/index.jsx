import React, { PureComponent } from 'react';
import { TimePicker } from 'antd';

import './index.scss';

class TimeRangePicker extends PureComponent {
    constructor(props) {
        super(props);

        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleChangeStart(val) {
        const { value, onChange } = this.props;

        onChange([val, value[1]]);
    }

    handleChangeEnd(val) {
        const { value, onChange } = this.props;

        onChange([value[0], val]);
    }

    render() {
        const { value, onChange, unit, ...otherProps } = this.props;
        const [v1, v2] = value;

        return (
            <div className="time-range-picker-component">
                <TimePicker value={v1} {...otherProps} onChange={this.handleChangeStart} />
                <span>{unit}</span>
                <span className="division">~</span>
                <TimePicker value={v2} {...otherProps} onChange={this.handleChangeEnd} />
                <span>{unit}</span>
            </div>
        );
    }
}

export default TimeRangePicker;

