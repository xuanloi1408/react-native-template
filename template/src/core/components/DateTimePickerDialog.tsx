import * as React from 'react';
import { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Dialog, { DialogButton } from 'react-native-popup-dialog';
import Styles from 'src/core/common/Styles';


const styles = StyleSheet.create({
    content: {
        padding: 12,
    },
    image: {
        width: 250,
        height: 250,
    },
});

type IDateTimePickerDialogProps = {
    visible: boolean
    date: Date
    onCancel()
    onConfirm(date: Date)
}

type IDateTimePickerDialogState = {
    date: Date
}

export default class DateTimePickerDialog extends PureComponent<IDateTimePickerDialogProps, IDateTimePickerDialogState> {

    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date,
        }
    }

    render() {
        return <Dialog
            visible={this.props.visible}
            footer={<View style={Styles.rowCenterVertical}>
                <DialogButton
                    textStyle={Styles.textSecondaryNormal}
                    text={'Quay lại'}
                    onPress={this.props.onCancel}
                    key="button-cancel"
                />
                <DialogButton
                    text={'Xác nhận'}
                    textStyle={[Styles.textHighlightNormal]}
                    onPress={() => this.props.onConfirm(this.state.date)}
                    key="button-confirm"
                />
            </View>}>
            <View style={styles.content}>
                <DatePicker
                    date={this.state.date}
                    mode={'date'}
                    locale={'vi'}
                    minimumDate={new Date()}
                    onDateChange={date => this.setState({ date })}
                />
            </View>
        </Dialog>;
    }
}
