import * as React from 'react';
import { Image } from 'react-native';

interface ITabBarIconProp {
    normal: any
    focused: any
    is_focused: boolean
    style?: any
}

export default class TabBarIcon extends React.PureComponent<ITabBarIconProp> {

    render() {
        const { is_focused, normal, focused } = this.props
        return (
            <Image
                source={is_focused ? focused : normal}
                style={[{ width: 24, height: 24, resizeMode: 'contain', padding: 2 }, this.props.style]}
            />
        );
    }
}
