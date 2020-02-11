/**
 * Created by InspireUI on 28/02/2017.
 */

import React from 'react';
import { LayoutAnimation, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Dimens from "../common/Dimens";
import { DEFAULT_DURATION, EventEmitter } from "../utils/ToastUtil";
import { EmitCode } from "../common/Constants";
import { Timer } from "../utils/TimeUtil";
import SnackBar from 'react-native-snackbar-component'
import { Dispatch } from "redux";
import actions from "../redux/toast/toast.action";
import Colors from "../common/Colors";

export interface IToastViewProps {
    toast: any

    addToast(msg, duration, key)

    removeToast(msg)
}

class ToastView extends React.Component<IToastViewProps> {
    toastListener
    nextToastId

    constructor(props) {
        super(props);
        this.nextToastId = 0;
    }

    componentDidMount() {
        this.toastListener = EventEmitter.addListener(EmitCode.Toast, this.doToast.bind(this));
    }

    componentWillUnmount() {
        this.toastListener.remove();
    }

    shouldComponentUpdate() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        return true;
    }

    render() {
        const { toast } = this.props;
        return (
            <View style={styles.container}>
                <SnackBar visible={toast.list[0]} bottom={0}
                    backgroundColor={Colors.snack_bar_background}
                    textMessage={toast.list[0] ? toast.list[0].msg : ""} />
                <SnackBar visible={toast.list[1]} bottom={Dimens.bottom_bar_height}
                    backgroundColor={Colors.snack_bar_background}
                    textMessage={toast.list[1] ? toast.list[1].msg : ""} />
            </View>
        );
    }

    doToast(msg, duration = DEFAULT_DURATION) {
        const { addToast, removeToast, toast } = this.props;
        const key = this.nextToastId++;
        addToast(msg, duration, key);
        Timer.setTimeout(() => removeToast(key), duration);
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

const mapStateToProps = ({ toast }) => ({ toast });

const mapDispatchToProps = {
    addToast: (msg, duration, key) => (dispatch: Dispatch<any>) => dispatch(actions.addToast(msg, duration, key)),
    removeToast: (msg) => (dispatch: Dispatch<any>) => dispatch(actions.removeToast(msg)),
};

export default connect(mapStateToProps, mapDispatchToProps)(ToastView);


