// @ts-ignore
import React, { PureComponent } from 'react';
import { Text, TouchableHighlight, View, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../common/Colors';
import Styles from '../common/Styles';
import _ from 'lodash'

interface IButtomProps {
    onPress?: any
    text: string
    type?: 'primary' | 'secondary' | 'highlight' | 'disable' | 'facebook' | 'google'
    style?: ViewStyle
    textStyle? : TextStyle
}

const styles = StyleSheet.create({
    container: {
        ...Styles.row,
        alignItems: 'stretch'
    },
});

export default class DefaultButton extends PureComponent<IButtomProps> {

    static defaultProps = {
        text: "",
        type: 'primary',
        style: {},
        textStyle: {}
    }

    onPress = () => {
        if (this.props.onPress && typeof this.props.onPress === 'function') {
            this.props.onPress();
        };
    };

    onPressDebounce = _.debounce(this.onPress, 300, { leading: true, trailing: false });

    renderIcon() {
        switch (this.props.type) {
            case 'facebook':
                return <FontAwesome name={'facebook'} color={Colors.white} size={20} />;
            case 'google':
                return <FontAwesome name={'google'} color={Colors.white} size={20} />;
        }
        return null;
    }

    render() {
        let containerStyle = Styles.btnPrimary;
        let textStyle = {
            ...Styles.textWhiteNormal,
            ...Styles.textCenter,
            ...this.props.textStyle
        };
        ;
        switch (this.props.type) {
            case 'secondary':
                containerStyle = Styles.btnSecondary;
                textStyle = {
                    ...Styles.textHighlightNormal,
                    ...Styles.textCenter,
                    ...this.props.textStyle
                };
                break;
            case 'highlight':
                containerStyle = Styles.btnHighlight;
                break;
            case 'disable':
                containerStyle = Styles.btnDisable;
                break;
            case 'facebook':
                containerStyle = Styles.btnFacebook;
                textStyle = {
                    ...Styles.textWhiteNormal,
                    ...Styles.textCenter,
                    ...this.props.textStyle
                };
                break;
            case 'google':
                containerStyle = Styles.btnGoogle
                textStyle = {
                    ...Styles.textWhiteNormal,
                    ...Styles.textCenter,
                    ...this.props.textStyle
                };
                break;
        }

        return (
            <TouchableHighlight underlayColor={Colors.dim}
                style={[styles.container, this.props.style]}
                onPress={this.onPressDebounce}>
                <View style={[Styles.rowCenter, containerStyle]}>
                    {this.renderIcon()}
                    <Text style={textStyle}>{this.props.text}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}
