import React, { PureComponent } from 'react';
import { LOGIN_URL } from 'constants/basic';
import AppLoading from 'components/AppLoading';
import RouteTree from './router';
import initializeState from './initState';
import createStore from './store';

import './config';
import './index.scss';

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            initState: null,
            store: null
        };
    }

    componentDidMount() {
        this.initializeState();
    }

    async initializeState() {
        let initState;

        try {
            initState = await initializeState();
        } catch (e) {
            location.href = LOGIN_URL;
            return;
        }

        if (!initState) {
            return;
        }

        const store = createStore(initState);

        this.setState({ initState, store });
    }

    render() {
        const { initState, store } = this.state;

        if (!initState || !store) {
            return <AppLoading />;
        }

        return <RouteTree store={store} indexPath={initState.sidebar.indexPath} />;
    }
}
