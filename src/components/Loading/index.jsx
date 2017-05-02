import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import './index.scss';

class Loading extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            requestNum: 0
        };
    }

    add() {
        this.setState({
            requestNum: this.state.requestNum + 1
        });
    }

    remove() {
        const num = this.state.requestNum;

        this.setState({
            requestNum: num - 1 < 0 ? 0 : num - 1
        });
    }

    render() {
        return (
            <section
                className={classNames('loading-component', { show: this.state.requestNum > 0 })}
            >
                <div className="spinner">
                    <div className="cube1" />
                    <div className="cube2" />
                </div>
            </section>
        );
    }
}

Loading.newInstance = function newLoadingInstance() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    /* eslint-disable react/no-render-return-value */
    const loading = ReactDOM.render(<Loading />, div);
    /* eslint-enable react/no-render-return-value */

    return {
        add() {
            loading.add();
        },

        remove() {
            loading.remove();
        },

        destory() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }
    };
};

export default Loading;
