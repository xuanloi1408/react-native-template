import * as React from 'react';
import { PureComponent } from 'react';
import { View } from 'react-native';
import Styles from '../common/Styles';


type ISpaceProps = {
    horizontal?: boolean
}

type ISpaceState = {}

export default class Divider extends PureComponent<ISpaceProps, ISpaceState> {
    static defaultProps = {
        size: 8,
    }

    render() {
        const style = this.props.horizontal ? Styles.verticalDivider : Styles.horizontalDivider;
        return <View style={[style]} />;
    }
}
