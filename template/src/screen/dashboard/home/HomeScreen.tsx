import BaseScreen, { IBaseScreenState, IBaseProps } from 'src/core/components/BaseScreen';
import * as React from 'react';
import { SafeAreaView, StatusBar, View, Alert } from 'react-native';
import Styles from 'src/core/common/Styles';
import Colors from 'src/core/common/Colors';
import ActionBar, { iconBack } from 'src/core/components/ActionBar';
import { mapStateToProps, mapDispatchToProps } from './actions';
import { connect } from 'react-redux';
import TimekeepingView from './components/TimekeepingView';
import Timekeeping from 'src/local/model/timekeeping';
import { LaborActions, LaborStates } from 'src/core/common/Constants';
import Strings from 'src/core/common/Strings';
import { alert } from 'src/core/utils/Utils';

type IHomeProps = {
} & IBaseProps

type IHomeState = {
    timekeeping: Timekeeping
} & IBaseScreenState

class HomeScreen extends BaseScreen<IHomeProps, IHomeState> {

    _timerInterval: any


    constructor(props) {
        super(props)
        this.state = {
            is_loading: false,
            timekeeping: new Timekeeping()
        }
    }


    _startTimekeeping = () => {
        const { timekeeping } = this.state
        if (timekeeping.state !== LaborStates.STANDING) {
            alert("", Strings.msg_action_deny)
            return;
        }

        if (this._timerInterval) {
            clearInterval(this._timerInterval);
        }

        timekeeping.state = LaborStates.WORKING
        timekeeping.duration += 1000;
        timekeeping.start_time = new Date().getTime()
        this.setState({timekeeping})
        this._timerInterval = setInterval(() => {
            timekeeping.duration += 1000;
            this.setState({ timekeeping });
        }, 1000);

    }

    _pauseTimekeeping = () => {
        const { timekeeping } = this.state
        if (timekeeping.state !== LaborStates.WORKING) {
            alert("", Strings.msg_action_deny)
            return;
        }

        timekeeping.state = LaborStates.PAUSING
        this.setState({timekeeping})
        if (this._timerInterval) {
            clearInterval(this._timerInterval);
        }
    }

    _resumeTimekeeping = () =>{
        const { timekeeping } = this.state
        if (timekeeping.state !== LaborStates.PAUSING) {
            alert("", Strings.msg_action_deny)
            return;
        }

        timekeeping.state = LaborStates.WORKING
        timekeeping.duration += 1000;
        this.setState({timekeeping})
        this._timerInterval = setInterval(() => {
            timekeeping.duration += 1000;
            this.setState({ timekeeping });
        }, 1000);
    }

    _stopTimekeeping = () => {
        const { timekeeping } = this.state
        if (timekeeping.state === LaborStates.DONE 
            || timekeeping.state === LaborActions.NONE) {
            alert("", Strings.msg_action_deny)
            return;
        }

        if (this._timerInterval) {
            clearInterval(this._timerInterval);
        }
        this.setState({
            timekeeping: new Timekeeping()
        })
    }

    _onPressAction = (action: number) => {
        if (action === LaborActions.START) {
            this._startTimekeeping();
            return;
        }

        if(action === LaborActions.PAUSE){
            this._pauseTimekeeping();
            return;
        }

        if(action === LaborActions.RESUME) {
            this._resumeTimekeeping();
            return;
        }

        if(action === LaborActions.STOP) {
            this._stopTimekeeping();
            return;
        }
    }

    render() {
        const { timekeeping } = this.state
        return <SafeAreaView style={Styles.app}>
            <StatusBar barStyle='default' backgroundColor={Colors.primaryDark} />
            <ActionBar title={''} leftIcon={iconBack(this.props.back)} />
            <View style={Styles.content}>
                <TimekeepingView duration={timekeeping.duration} onPressAction={this._onPressAction} status={timekeeping.state} />
            </View>
            {this.renderLoading()}
        </SafeAreaView>;
    }

    async prepareData() {

    }

    componentWillUnmount() {
        super.componentWillUnmount();
        if (this._timerInterval) {
            clearInterval(this._timerInterval);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
