import React, { Component } from 'react';
import { AppState, AppStateStatus, Image, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import CodePush from 'react-native-code-push';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import { Provider } from 'react-redux';
import Colors from 'src/core/common/Colors';
import Dimens from 'src/core/common/Dimens';
import Images from 'src/core/common/Images';
import Styles from 'src/core/common/Styles';
import ToastView from 'src/core/components/ToastView';
import ReduxWrapper, { appStore } from './src/ReduxWrapper';
import NotificationUtils from 'src/core/utils/NotificationUtils';


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.highlight,
        accent: 'yellow',
    },
};

console.disableYellowBox = true;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    progress: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        paddingBottom: 24,
    },

    imageHeader: {
        marginBottom: 24,
        width: Dimens.deviceWidth,
        height: Dimens.deviceWidth * 420 / 624,
        resizeMode: 'contain',
    },

    process_container: {
        alignItems: 'center',
    },

});


interface IAppState {
    appState: AppStateStatus
    updating_percent: string,
    loading: boolean,
}

export default class App extends Component<{}, IAppState> {

    constructor(props) {
        super(props);
        this.state = {
            appState: AppState.currentState,
            updating_percent: '',
            loading: true,
        };
        this._checkCodePushUpdate();
    }

    componentDidMount() {
        NotificationUtils.subscribeFcm();
    }

    componentWillUnmount() {
        NotificationUtils.unsubscribeFcm();
    }


    _checkCodePushUpdate = () => {
        const installMode = CodePush.InstallMode.IMMEDIATE;
        CodePush.notifyAppReady();
        CodePush.sync({
            installMode,
            deploymentKey: Platform.OS === 'ios' ? 'tL2k5lMJNQlWDnaGaUsrc9BfKyVOM5_ZeHkVQ' : 'x_facbPTyfuZoaOZWgGstWcUuW5TNHFMo74mP',
        }, (status) => {
            switch (status) {
                case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                    break;
                case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                    break;
                case CodePush.SyncStatus.INSTALLING_UPDATE:
                    break;
                case CodePush.SyncStatus.UP_TO_DATE:
                    this.setState({ loading: false });
                    break;
                case CodePush.SyncStatus.UPDATE_IGNORED:
                    break;
                case CodePush.SyncStatus.UPDATE_INSTALLED:
                    this.setState({ loading: false });
                    break;
                case CodePush.SyncStatus.UNKNOWN_ERROR:
                    break;
                default:
            }
        }, ({ receivedBytes, totalBytes }) => {
            const downloaded = (receivedBytes * 100) / totalBytes;
            this.setState({ updating_percent: downloaded.toFixed(0) });
        });
    };

    render() {
        const { updating_percent } = this.state;
        if (updating_percent.length > 0) {
            return (
                <View style={styles.container}>
                    <Image style={styles.imageHeader} source={Images.banner_update} />
                    <View style={styles.progress}>
                        <Text style={Styles.textPrimaryLarge}>{'Đang cập nhật phiên bản...'}</Text>
                        {updating_percent.length > 0 && <View style={styles.process_container}>
                            <Text style={Styles.textPrimaryLarge}>{updating_percent + '%'}</Text>
                            <Progress.Bar progress={parseInt(updating_percent, 10) / 100} width={200} />
                        </View>}
                    </View>
                </View>
            );
        }

        return (
            <Provider store={appStore}>
                <PaperProvider theme={theme}>
                    <View style={Styles.root}>
                        <StatusBar barStyle="default" backgroundColor={Colors.primaryDark} />
                        <ReduxWrapper />
                        <ToastView />
                    </View>
                </PaperProvider>
            </Provider>
        );
    }
}
