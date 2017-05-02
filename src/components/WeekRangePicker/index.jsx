import React, { PureComponent } from 'react';
import WeekPicker from 'components/WeekPicker';

import './index.scss';

class WeekRangePicker extends PureComponent {
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
        const [v1, v2] = this.props.value;

        return (
            <div className="week-range-picker-component">
                <WeekPicker value={v1} onChange={this.handleChangeStart} />
                <span>~</span>
                <WeekPicker value={v2} onChange={this.handleChangeEnd} />
            </div>
        );
    }
}

export default WeekRangePicker;
