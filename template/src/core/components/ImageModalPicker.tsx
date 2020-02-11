// @ts-ignore
import React, { PureComponent } from 'react';
import ModalPicker from './ModalPicker';
import { View, StyleSheet } from 'react-native';
import Styles from '../common/Styles';
import Colors from '../common/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
type ImageModalPickerProps = {
    onSelectItem(option, closeCallback)
}

type ImageModalPickerState = {

}

const styles = StyleSheet.create({
    item_container: {
        ...Styles.centerNoFlex,
        backgroundColor: Colors.white,
        borderRadius: 4
    },
});

export default class ImageModalPicker extends PureComponent<ImageModalPickerProps, ImageModalPickerState> {

    constructor(props) {
        super(props);
    }

    _options = [
        {
            key: "take_photo",
            label: "Chụp ảnh"
        }, {
            key: "choose_from_library",
            label: "Chọn từ máy"
        }]

    render() {
        return (
            <ModalPicker
                data={this._options}
                cancelText={"Quay lại"}
                onChange={this.props.onSelectItem}>
                <View style={styles.item_container}>
                    <MaterialIcons name='add-a-photo' size={32} color={Colors.primary} />
                </View>
            </ModalPicker>
        );
    }

}