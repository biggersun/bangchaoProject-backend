import React from 'react';
import { Select } from 'antd';
import { weeks } from 'constants/basic';

const Option = Select.Option;

function WeekPicker(props) {
    return (
        <Select {...props}>
            {
                weeks.map((w, index) => <Option key={index} value={String(index + 1)}>{w}</Option>)
            }
        </Select>
    );
}

export default WeekPicker;
