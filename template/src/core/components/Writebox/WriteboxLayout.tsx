// @ts-ignore
import React, { Component } from 'react';
import { KeyboardAvoidingView, LayoutAnimation, Platform } from 'react-native';
import styles from './styles';

import WriteBoxContainer from './WriteboxContainer';


type WriteBoxProps = {
    behavior?: string
    placeholder?: string
    inputLimit?: number,
    style?: any
    autoFocus?: boolean
    value?: string
    onChange?(value)
}

export default class WriteBox extends Component<WriteBoxProps> {
    frame: any

    constructor(props) {
        super(props);
        this.state = {
            behavior: 'padding',
        };
    }

    onKeyboardChange(event) {
        if (!event) {
            this.setState({ bottom: 0 });
            return;
        }
        const { duration, easing, endCoordinates } = event;
        const height = this.relativeKeyboardHeight(endCoordinates);
        if (duration && easing) {
            LayoutAnimation.configureNext({
                duration: duration,
                update: {
                    duration: duration,
                    type: LayoutAnimation.Types[easing] || 'keyboard',
                },
            });
        }
        this.setState({ bottom: height });
    }

    onLayout(event) {
        this.frame = event.nativeEvent.layout;
    }

    /**
     * Render
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <KeyboardAvoidingView
                behavior={'position'}
                style={styles.contentLayout}
                {...Platform.select({
                    ios: {},
                    android: {
                        onKeyboardChange: this.onKeyboardChange,
                        onLayout: this.onLayout,
                    },
                })}
            >
                <WriteBoxContainer {...this.props} />
            </KeyboardAvoidingView>
        );
    }
}
