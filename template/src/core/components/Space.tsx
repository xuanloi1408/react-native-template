import * as React from 'react';
import { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import Dimens from '../common/Dimens';

const styles = StyleSheet.create({
    content: {
        width: Dimens.deviceWidth,
        height: 8,
    },
});

type ISpaceProps = {
    size?: number
}

type ISpaceState = {}

export default class Space extends PureComponent<ISpaceProps, ISpaceState> {
    static defaultProps = {
        size: 8,
    }

    render() {
        const extentStyle = { height: this.props.size };
        return <View style={[styles.content, extentStyle]} />;
    }
}
