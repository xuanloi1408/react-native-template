import * as React from 'react';
import { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Colors from 'src/core/common/Colors';
import Dimens from 'src/core/common/Dimens';
import Styles from 'src/core/common/Styles';
import { countTime } from 'src/core/utils/TimeUtil';
import Timekeeping from 'src/local/model/timekeeping';
import DefaultButton from 'src/core/components/DefaultButton';
import Strings from 'src/core/common/Strings';
import moment from 'moment';
import { LaborStates, LaborActions } from 'src/core/common/Constants';

const styles = StyleSheet.create({
    content: {
        ...Styles.centerNoFlex,
        width: Dimens.deviceWidth,
        height: Dimens.deviceWidth * 158 / 375,
        backgroundColor: Colors.white,
    },

    tvTimekeeping: {
        ...Styles.textPrimaryNormal,
        fontSize: 36,
        ...Styles.textCenter,
    },

    btn: {
        ...Styles.centerNoFlex,
        marginTop: 16,
        marginStart: 10,
        marginEnd: 10,
        width: Dimens.deviceWidth - 20,
        marginBottom: 10,
        height: 48,
    },

    btnHaft: {
        ...Styles.centerNoFlex,
        marginTop: 16,
        marginStart: 10,
        marginEnd: 10,
        width: (Dimens.deviceWidth - 30) / 2,
        marginBottom: 10,
        height: 48,
    },

    btnText: {
        fontSize: Dimens.font_size_normal_15
    }
});

type ITimekeepingProps = {
    duration: number
    status: number
    onPressAction(action: number)
}

type ITimekeepingState = {
}

export default class TimekeepingView extends PureComponent<ITimekeepingProps, ITimekeepingState> {


    constructor(props) {
        super(props);
        this.state = {
            duration: 0,
        };
    }


    onStart = () => {
        this.props.onPressAction(LaborActions.START)
    }

    onPause = () => {
        this.props.onPressAction(LaborActions.PAUSE)
    }

    onResume = () => {
        this.props.onPressAction(LaborActions.RESUME)
    }

    onStop = () => {
        this.props.onPressAction(LaborActions.STOP)
    }

    renderStart = () => {
        return this.props.status === LaborStates.STANDING
            && <DefaultButton text={Strings.start} onPress={this.onStart} style={styles.btn} textStyle={styles.btnText} type={'highlight'} />
    }

    renderStarted = () => {
        return this.props.status === LaborStates.WORKING
            && <View style={Styles.rowCenterVertical}>
                <DefaultButton text={Strings.pause} onPress={this.onPause} style={styles.btnHaft} textStyle={styles.btnText} type={'secondary'} />
                <DefaultButton text={Strings.stop} onPress={this.onStop} style={styles.btnHaft} textStyle={styles.btnText} />
            </View>
    }

    renderPaused = () => {
        return this.props.status === LaborStates.PAUSING
            && <View style={Styles.rowCenterVertical}>
                <DefaultButton text={Strings.resume} onPress={this.onResume} style={styles.btnHaft} textStyle={styles.btnText} type={'highlight'} />
                <DefaultButton text={Strings.stop} onPress={this.onStop} style={styles.btnHaft} textStyle={styles.btnText} />
            </View>
    }

    render() {
        moment.locale(Strings.getLanguage());
        const date = new Date();
        return <View style={styles.content}>
            <Text style={styles.tvTimekeeping}>{countTime(this.props.duration)}</Text>
            <Text style={Styles.textPrimaryNormal}>{moment(date).format(Strings.full_datetime_format)}</Text>
            {this.renderStart()}
            {this.renderStarted()}
            {this.renderPaused()}
        </View>;
    }

}
