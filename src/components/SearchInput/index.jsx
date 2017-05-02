import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import classNames from 'classnames';

import './index.scss';

const InputGroup = Input.Group;

class SearchInput extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: props.defaultValue || '',
            focus: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFocusBlur = this.handleFocusBlur.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleFocusBlur(e) {
        this.setState({
            focus: e.target === document.activeElement
        });
    }

    handleSearch() {
        if (this.props.onSearch) {
            this.props.onSearch(this.state.value);
        }
    }

    render() {
        const { style, size, placeholder } = this.props;
        const btnCls = classNames({
            'ant-search-btn': true,
            'ant-search-btn-noempty': !!this.state.value.trim()
        });
        const searchCls = classNames({
            'ant-search-input': true,
            'ant-search-input-focus': this.state.focus
        });

        return (
            <div className="search-input-component" style={style}>
                <InputGroup className={searchCls}>
                    <Input
                        placeholder={placeholder}
                        value={this.state.value}
                        onChange={this.handleInputChange}
                        onFocus={this.handleFocusBlur}
                        onBlur={this.handleFocusBlur}
                        onPressEnter={this.handleSearch}
                    />
                    <div className="ant-input-group-wrap">
                        <Button
                            icon="search"
                            className={btnCls}
                            size={size}
                            onClick={this.handleSearch}
                        />
                    </div>
                </InputGroup>
            </div>
        );
    }
}

SearchInput.propTypes = {
    style: PropTypes.object,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    onSearch: PropTypes.func.isRequired
};

export default SearchInput;
