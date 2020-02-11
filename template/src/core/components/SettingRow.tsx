// @ts-ignore
import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Colors from 'src/core/common/Colors';
import Dimens from 'src/core/common/Dimens';
import Styles from 'src/core/common/Styles';
import Icons, { AwesomeIcons, MaterialCommunityIcons, SimpleLineIcons } from 'src/core/common/Icons';
const styles = StyleSheet.create({
    container: {
        marginTop: Dimens.common_margin,
    },
    itemContainer: {
        ...Styles.rowCenterVertical,
        flex: 1,
        backgroundColor: Colors.white,
        height: Dimens.item_height,
        borderBottomColor: Colors.dim,
        borderBottomWidth: 1,
        paddingLeft: Dimens.common_padding,
        paddingRight: Dimens.common_padding,
    },

    itemContent: {
        flex: 1,
    },

    iconContainer: {
        width: 40,
        borderRadius: 20,
        backgroundColor: Colors.dim,
        height: 40,
        marginRight: Dimens.common_margin,
    },
});

type SettingRowProps = {
    icon?: any
    title: string
    next?: boolean
    onPress?()
    subtitle?: string
};

type SettingRowState = {

};
export default class SettingRow extends PureComponent<SettingRowProps, SettingRowState> {

    constructor(props) {
        super(props);
    }

    _onItemPress = () => {
        if (this.props.onPress) {
            this.props.onPress();
        }
    }

    renderIcon = () => {
        const { icon } = this.props;
        if (!icon) {
            return null;
        }

        if (icon.font === Icons.SimpleLineIcons) {
            return (
                <SimpleLineIcons
                    name={icon.name}
                    size={18}
                    color={icon.color ? icon.color : Colors.primary}
                />
            );
        }

        if (icon.font === Icons.MaterialCommunityIcons) {
            return (
                <MaterialCommunityIcons
                    name={icon.name}
                    size={18}
                    color={icon.color ? icon.color : Colors.primary}
                />
            );
        }
        if (icon.font === Icons.AwesomeIcons) {
            return (
                <AwesomeIcons
                    name={icon.name}
                    size={18}
                    color={icon.color ? icon.color : Colors.primary}
                />
            );
        }

        return null;
    }

    renderIconContainer = () => {
        return (this.props.icon &&
            <View style={[Styles.centerNoFlex, styles.iconContainer]}>
                {this.renderIcon()}
            </View>);
    }

    renderNext = () => {
        return (this.props.next &&
            <SimpleLineIcons name={'arrow-right'} size={16}
                style={{ marginRight: Dimens.common_margin }} color={Colors.dim} />);
    }


    renderSubTitle = () => {
        return (this.props.subtitle &&
            <View>
                <Text style={Styles.textHighlightNormal}>{this.props.subtitle}</Text>
            </View>);
    }

    render() {
        return (<TouchableHighlight
            underlayColor={Colors.dim}
            onPress={this._onItemPress}>
            <View style={styles.itemContainer}>
                {this.renderIconContainer()}
                <View style={[Styles.rowCenterVertical, styles.itemContent]}>
                    <Text style={Styles.textPrimaryNormal}>{this.props.title}</Text>
                </View>
                {this.renderNext()}
                {this.renderSubTitle()}
            </View>
        </TouchableHighlight>);
    }

}
