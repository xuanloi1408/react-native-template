import * as React from 'react';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createReactNavigationReduxMiddleware, createReduxContainer } from 'react-navigation-redux-helpers';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducers from './redux';
import AppNavigator from './navigation/Router';
import { connect } from 'react-redux';
import { Component } from 'react';
import { BackHandler, AppState } from 'react-native';
import firebase from 'react-native-firebase';

const navMiddleware = createReactNavigationReduxMiddleware((state: any) => state.nav, 'root');

const middleware = [thunk, navMiddleware];

export const appStore = compose(applyMiddleware(...middleware))(createStore)(reducers);

const _persistor = persistStore(appStore, null, () => appStore.getState());

const Navigator = createReduxContainer(AppNavigator, 'root');

const mapStateToProps = (state) => ({
    state: state.nav,
});

const ReduxNavigator = connect(mapStateToProps)(Navigator);


export const persistor = _persistor;

interface IReduxWrapperProps {
    nav: any

    goBack()
}

class ReduxWrapper extends Component<IReduxWrapperProps> {

    _backHandler: any

    _lastTimeBackPress: number = 0;

    appState: string = 'active';

    constructor(props) {
        super(props);
    }

    _handleOnBackPress = () => {
        const mainRoutes = this.props.nav.routes[0];
        if (mainRoutes.index !== 0) {
            this.props.goBack();
            return true;
        }

        if (mainRoutes.routes[0].index !== 0) {
            this.props.goBack();
            return true;
        }

        if (this._lastTimeBackPress) {
            const currentTime = new Date().getTime();
            if (currentTime - this._lastTimeBackPress < 2500) {
                return false;
            }
        }
        this._lastTimeBackPress = new Date().getTime();
        return true;
    }

    _handlerOnActive = async () => {

    }

    _handlerOnBackground = async () => {

    }

    _handleAppStateChange = async (nextAppState) => {
        if (this.appState.match(/inactive|background/) && nextAppState === 'active') {
            await this._handlerOnActive();
        } else {
            await this._handlerOnBackground();
        }
        this.appState = nextAppState;
    }

    async componentDidMount() {
        this._backHandler = BackHandler.addEventListener('hardwareBackPress', this._handleOnBackPress);
        AppState.addEventListener('change', this._handleAppStateChange);
        await this._initFCM();
        firebase.analytics().setAnalyticsCollectionEnabled(true);
        firebase.analytics().setSessionTimeoutDuration(600000);
    }

    async _initFCM() {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
        } else {
            try {
                await firebase.messaging().requestPermission();
            } catch (error) {
            }
        }
        firebase.messaging().subscribeToTopic('good-kid');
    }

    componentWillUnmount() {
        this._backHandler.remove();
        firebase.messaging().unsubscribeFromTopic('good-kid');
    }

    render() {
        return <ReduxNavigator />;
    }
}

const mapDispatchToProps = ({
    goBack: () => (dispatch) => dispatch(NavigationActions.back()),
});

const mapStateToProps2 = (state) => ({
    nav: state.nav,
});

export default connect(mapStateToProps2, mapDispatchToProps)(ReduxWrapper);
