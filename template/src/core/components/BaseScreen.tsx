// @ts-ignore
import React, { Component } from 'react';
import Colors from '../common/Colors';
import { Timer } from '../utils/TimeUtil';
import Spinner from './Spinner';
import firebase from 'react-native-firebase';
import { debug } from '../utils/DebugUtil';

export type IBaseScreenState = {
    is_loading: boolean
}

export type IBaseProps = {
    back()
    logout()
}

export default class BaseScreen<Props = {}, States extends IBaseScreenState = { is_loading: false }> extends Component<Props, States> {

    className: string;

    static navigationOptions = {
        header: null,
    };

    minDisplayTime() {
        return 100;
    }

    constructor(props: Props) {
        super(props);
        let comp:any = this.constructor;
        this.className = comp.name;
        firebase.analytics().setCurrentScreen(this.className);
    }

    showLoading() {
        this.setState({
            is_loading: true,
        });
    }

    hideLoading() {
        this.setState({
            is_loading: false,
        });
    }

    componentDidMount() {
        debug(`Mount : [${this.className}]`);
        Timer.setTimeout(() => this.prepareData(), this.minDisplayTime());
    }

    componentWillUnmount() {
        debug(`Unmount : [${this.className}]`);
    }

    async prepareData() {
    }


    renderLoading(): React.ReactNode {
        return this.state.is_loading && <Spinner color={Colors.loading} size={'large'} mode={'overlay'} />;
    }
}
