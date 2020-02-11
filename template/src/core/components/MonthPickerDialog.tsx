import * as React from 'react';
import { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import MonthSelectorCalendar from 'react-native-month-selector';
import Dialog, { DialogButton } from 'react-native-popup-dialog';
import Styles from 'src/core/common/Styles';
import moment from 'moment';

const styles = StyleSheet.create({
    content: {
    },
    image: {
        width: 250,
        height: 250,
    },
});

type IMonthPickerDialogProps = {
    visible: boolean
    month: number,
    year: number
    onCancel()
    onConfirm(month, year)
}

type IMonthPickerDialogState = {
    minDate: moment.Moment
    maxDate: moment.Moment
    month: moment.Moment
}

export default class MonthPickerDialog extends PureComponent<IMonthPickerDialogProps, IMonthPickerDialogState> {

    constructor(props) {
        super(props);
        const date = new Date();
        let maxMonth = date.getMonth();
        let maxYear = date.getFullYear();
        if (maxMonth === 0) {
            maxMonth = 12;
            maxYear = maxYear - 1;
        }
        this.state = {
            minDate: moment('01-01-2019', 'DD-MM-YYYY'),
            maxDate: moment(`01-${maxMonth}-${maxYear}`, 'DD-MM-YYYY'),
            month: moment(`01-${this.props.month}-${this.props.year}`, 'DD-MM-YYYY'),
        };
    }

    render() {
        return <Dialog
            width={250}
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
                    onPress={() => this.props.onConfirm(this.state.month.month() + 1, this.state.month.year())}
                    key="button-confirm"
                />
            </View>}>
            <View style={styles.content}>
                <MonthSelectorCalendar
                    minDate={this.state.minDate}
                    maxDate={this.state.maxDate}
                    selectedDate={this.state.month}
                    localeLanguage={'vi'}
                    nextText={'Sau'}
                    prevText={'Trước'}
                    onMonthTapped={(date) => this.setState({ month: date })}
                />
            </View>
        </Dialog>;
    }
}
