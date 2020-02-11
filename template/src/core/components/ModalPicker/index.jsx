'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    Dimensions,
    Modal,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform,
    ViewPropTypes
} from 'react-native';

import BaseComponent from './BaseComponent';
import { Dimens } from '@common'

let componentIndex = 0;

const propTypes = {
    data: PropTypes.array,
    onChange: PropTypes.func,
    initValue: PropTypes.string,
    style: ViewPropTypes.style,
    selectStyle: ViewPropTypes.style,
    optionStyle: ViewPropTypes.style,
    optionTextStyle: ViewPropTypes.style,
    sectionStyle: ViewPropTypes.style,
    sectionTextStyle: ViewPropTypes.style,
    cancelStyle: ViewPropTypes.style,
    cancelTextStyle: ViewPropTypes.style,
    overlayStyle: ViewPropTypes.style,
    cancelText: PropTypes.string
};

const defaultProps = {
    data: [],
    onChange: () => {
    },
    initValue: 'Select me!',
    style: {},
    selectStyle: {},
    optionStyle: {},
    optionTextStyle: {},
    sectionStyle: {},
    sectionTextStyle: {},
    cancelStyle: {},
    cancelTextStyle: {},
    overlayStyle: {},
    cancelText: 'cancel'
};

export default class ModalPicker extends BaseComponent {

    constructor() {

        super();

        this._bind(
            'onChange',
            'open',
            'close',
            'renderChildren'
        );

        this.state = {
            animationType: 'slide',
            modalVisible: false,
            transparent: false,
            selected: 'please select'
        };
    }

    componentDidMount() {
        this.setState({ selected: this.props.initValue });
        this.setState({ cancelText: this.props.cancelText });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.initValue != this.props.initValue) {
            this.setState({ selected: nextProps.initValue });
        }
    }

    onChange(item) {
        this.props.onChange(item, this.close);
        this.setState({ selected: item.label });
    }

    close() {
        this.setState({
            modalVisible: false
        });
    }

    open() {
        this.setState({
            modalVisible: true
        });
    }

    renderSection(section) {
        return (
            <View key={section.key} style={[styles.sectionStyle, this.props.sectionStyle]}>
                <Text style={[styles.sectionTextStyle, this.props.sectionTextStyle]}>{section.label}</Text>
            </View>
        );
    }

    renderOption(option) {
        return (
            <TouchableOpacity key={option.key} onPress={() => this.onChange(option)}>
                <View style={[styles.optionStyle, this.props.optionStyle]}>
                    <Text style={[styles.optionTextStyle, this.props.optionTextStyle]}>{option.label}</Text>
                </View>
            </TouchableOpacity>)
    }

    renderOptionList() {
        let options = this.props.data.map((item) => {
            if (item.section) {
                return this.renderSection(item);
            } else {
                return this.renderOption(item);
            }
        });

        let optionHeight = Math.min(48 * this.props.data.length, Dimens.deviceHeight - 96);

        return (
            <View style={[styles.overlayStyle, this.props.overlayStyle]} key={'modalPicker' + (componentIndex++)}>
                <View style={[styles.optionContainer, {
                    height: optionHeight,
                }]}>
                    <ScrollView keyboardShouldPersistTaps="always">
                        <View style={{ paddingHorizontal: 10 }}>
                            {options}
                        </View>
                    </ScrollView>
                </View>
                <View style={[styles.cancelContainer, { marginTop: 10 }]}>
                    <TouchableOpacity onPress={this.close}>
                        <View style={[styles.cancelStyle, this.props.cancelStyle]}>
                            <Text
                                style={[styles.cancelTextStyle, this.props.cancelTextStyle]}>{this.props.cancelText}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>);
    }

    renderChildren() {
        if (this.props.children) {
            return this.props.children;
        }

        return (
            <View style={[styles.selectStyle, this.props.selectStyle]}>
                <Text style={[styles.selectTextStyle, this.props.selectTextStyle]}>{this.state.selected}</Text>
            </View>
        );
    }

    render() {

        const dp = (
            <Modal transparent={true} ref="modal" visible={this.state.modalVisible} onRequestClose={this.close}
                animationType={this.state.animationType}>
                {this.renderOptionList()}
            </Modal>
        );

        return (
            <View style={this.props.style}>
                {dp}
                <TouchableOpacity onPress={this.open}>
                    {this.renderChildren()}
                </TouchableOpacity>
            </View>
        );
    }
}


const { height, width } = Dimensions.get('window');

const PADDING = 12;
const BORDER_RADIUS = 5;
const FONT_SIZE = 16;
const HIGHLIGHT_COLOR = 'rgba(0,118,255,0.9)';
const OPTION_CONTAINER_HEIGHT = 400;

var styles = StyleSheet.create({

    overlayStyle: {
        flex: 1,
        width: width,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0,0,0,0.3)'
    },

    optionContainer: {
        borderRadius: BORDER_RADIUS,
        width: width * 0.8,
        backgroundColor: 'rgba(255,255,255,0.95)',
        left: width * 0.1,
    },

    cancelContainer: {
        left: width * 0.1,
        marginBottom: 10,
    },

    selectStyle: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        borderRadius: BORDER_RADIUS
    },

    selectTextStyle: {
        textAlign: 'center',
        color: '#333',
        fontSize: FONT_SIZE
    },

    cancelStyle: {
        borderRadius: BORDER_RADIUS,
        width: width * 0.8,
        backgroundColor: 'rgba(255,255,255,0.8)',
        height: 48,
        alignItems: "center",
        justifyContent: "center",
    },

    cancelTextStyle: {
        textAlign: 'center',
        color: '#333',
        fontSize: FONT_SIZE
    },

    optionStyle: {
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },

    optionTextStyle: {
        textAlign: 'center',
        fontSize: FONT_SIZE,
        color: HIGHLIGHT_COLOR
    },

    sectionStyle: {
        padding: PADDING * 2,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },

    sectionTextStyle: {
        textAlign: 'center',
        fontSize: FONT_SIZE
    }
});

ModalPicker.propTypes = propTypes;
ModalPicker.defaultProps = defaultProps;
