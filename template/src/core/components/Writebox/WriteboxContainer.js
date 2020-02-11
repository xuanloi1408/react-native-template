/* @flow */
import React, {Component} from 'react';
import {
    View,
    Text,
    Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';
import WriteBoxInput from './WriteboxInput';

/* Setup */
import styles from './styles';
import {debug} from '../../utils/DebugUtil';

const MAGICAL_NUMBER = 30;
const INPUT_HEIGHT = 32;

export default class WriteBoxContainer extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        autoFocus: PropTypes.bool,
        value: PropTypes.string,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
    }

    static defaultProps = {
        autoFocus: false,
        value: undefined,
        onChange: () => {
        },
        onFocus: () => {
        },
        onBlur: () => {
        },
    }

    constructor(props) {
        super(props);
        this.state = {
            inputHeight: INPUT_HEIGHT,
            value: props.value,
            buttonText: props.submitLabel,
            autoFocus: props.autoFocus,
        };
    }

    _onChange = ({value}) => {
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }

    _onBlur(event) {
        this.setState({autoFocus: false});
        return this.props.onBlur(event);
    }

    render() {
        const totalHeight = this.state.inputHeight + MAGICAL_NUMBER;
        return (
            <View style={[styles.writeBoxContainer, {height: totalHeight}]}>
                {/* Write box with submit button and more */}
                <View style={styles.writeContainer}>
                    <View style={styles.inputContent}>
                        <WriteBoxInput
                            placeholder={this.props.placeholder}
                            inputLimit={this.props.inputLimit}
                            autoFocus={this.state.autoFocus}
                            onFocus={this.props.onFocus}
                            onBlur={this._onBlur.bind(this)}
                            value={this.state.value}
                            onHeightChanged={({height}) => {
                                this.setState({inputHeight: height});
                            }}
                            onChange={this._onChange}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
