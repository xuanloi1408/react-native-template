/**
 * Created by Cao Xuan Loi on 12/21/2018.
 */
// @ts-ignore
import React, { PureComponent } from 'react';
import { Image, ImageRequireSource, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../common/Colors';
import Dimens from '../common/Dimens';
import Images from '../common/Images';
import Styles from '../common/Styles';

const styles = StyleSheet.create({
    numberWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 2,
        right: -2,
        height: 20,
        minWidth: 20,
        minHeight: 20,
        backgroundColor: Colors.red,
        borderRadius: 10,
    },
    number: {
        color: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        textAlign: 'center',
    },

    searchContainer: {
        height: 38,
        borderRadius: 2,
        width: Dimens.deviceWidth - Dimens.common_margin - Dimens.toolbarSize,
        justifyContent: 'center',
        backgroundColor: Colors.dim,
        paddingLeft: Dimens.common_padding,
        position: 'absolute',
    },

    searchIcon: {
        height: 16,
        width: 16,
        marginRight: Dimens.common_margin,
    },

    searchInput: {
        flex: 1,
        height: 36,
        marginLeft: 0,
        fontSize: 13,
        textAlign: 'left',
        alignSelf: 'center',
    },

    searchText: {
        fontSize: 13,
        marginLeft: 12,
        color: Colors.textSecondary,
    },
});

export interface IActionBarIcon {
    icon: ImageRequireSource
    onPress: () => void
    badge?: number
    dividerLeft?: boolean
    dividerRight?: boolean
}

interface IActionBarProps {
    title: string
    leftIcon?: IActionBarIcon
    rightIcons?: IActionBarIcon[]
    titleStyle?: StyleSheet
    isCenter?: boolean
    onSearch?: (keyword) => any
}

export const iconBack = (_onPress): IActionBarIcon => ({
    icon: Images.ic_actionbar_back,
    onPress: () => _onPress(),
});
export const MenuIcon = (_onPress): IActionBarIcon => ({
    icon: Images.ic_actionbar_menu,
    onPress: () => _onPress(),
});

export const SettingsIcon = (_onPress): IActionBarIcon => ({
    icon: Images.ic_actionbar_settings,
    onPress: () => _onPress(),
});

export const SearchIcon = (_onPress): IActionBarIcon => ({
    icon: Images.ic_actionbar_search,
    onPress: () => _onPress(),
});

export const NotifyIcon = (_onPress): IActionBarIcon => ({
    icon: Images.ic_actionbar_notification,
    onPress: () => _onPress(),
});

export const MoreIcon = (_onPress): IActionBarIcon => ({
    icon: Images.ic_actionbar_more,
    onPress: () => _onPress(),
});
export const TimesheetIcon = (_onPress): IActionBarIcon => ({
    icon: Images.ic_actionbar_timesheet,
    onPress: () => _onPress(),
});

export const TimeCheckIcon = (_onPress): IActionBarIcon => ({
    icon: Images.ic_actionbar_timecheck,
    onPress: () => _onPress(),
});

export default class ActionBar extends PureComponent<IActionBarProps> {

    _searchTimeout: any

    _onSearch = (keyword: string) => {
        if (this._searchTimeout) {
            clearTimeout(this._searchTimeout);
        }
        this._searchTimeout = setTimeout(() => {
            this.props.onSearch(keyword);
        }, 550);
    }

    renderSearch = () => {
        const { title, leftIcon, rightIcons } = this.props;
        const left = leftIcon ? Dimens.toolbarSize : Dimens.toolbarPadding;
        const right = rightIcons ? Dimens.toolbarSize * rightIcons.length : Dimens.toolbarPadding;
        return (
            <View
                style={[Styles.rowCenterVertical, styles.searchContainer,
                { left: left, right: right }]}
            >
                <TextInput
                    style={styles.searchInput}
                    autoFocus={true}
                    onChangeText={(keyword) => this._onSearch(keyword)}
                    underlineColorAndroid="transparent"
                    placeholder={title}
                    placeholderTextColor={Colors.textSecondary}
                />
                <Image source={Images.ic_actionbar_search} style={styles.searchIcon} />
            </View>
        );
    }

    renderTitle = () => {
        const { title, leftIcon, rightIcons, isCenter } = this.props;
        const left = leftIcon ? Dimens.toolbarSize : Dimens.toolbarPadding;
        const right = rightIcons ? Dimens.toolbarSize * rightIcons.length : Dimens.toolbarPadding;
        const padding = Math.max(left, right);
        const titleStyle = this.props.titleStyle || {};
        const textCenter = isCenter ? { textAlign: 'center' } : {};
        return (
            <Text style={[Styles.titleToolBar, {
                left: padding,
                right: padding,
            }, textCenter, titleStyle]}
                ellipsizeMode={'tail'}
                numberOfLines={1}>{title}</Text>
        );
    }

    render() {
        const { leftIcon, rightIcons } = this.props;
        const numberWrap = (badge) => {
            if (badge > 0) {
                return (<View style={styles.numberWrap}>
                    <Text style={styles.number}>{`${badge}`}</Text>
                </View>);
            }
            return null;
        };
        return (
            <View style={[Styles.toolBar]}>
                {/*Left Icon*/}
                {leftIcon &&
                    <TouchableOpacity onPress={() => leftIcon.onPress()} style={[Styles.iconToolBarContainer, { left: 0 }]}>
                        <Image source={leftIcon.icon} style={Styles.iconToolBar} />
                    </TouchableOpacity>}

                {this.props.onSearch && this.renderSearch()}
                {!this.props.onSearch && this.renderTitle()}
                {/*Right Icon*/}
                {rightIcons && rightIcons.map((icon, idx) => (
                    <View key={`menu-${idx}`}
                        style={[Styles.iconToolBarContainer, Styles.rowCenterVertical, { right: 48 * idx }]}>
                        {icon.dividerLeft ? <View style={[Styles.toolBarDivider, { height: 20 }]} /> : null}
                        <TouchableOpacity style={[Styles.iconToolBar]}
                            onPress={icon.onPress}>
                            <View style={Styles.center}>
                                <Image source={icon.icon} style={Styles.iconToolBar} />
                                {numberWrap(icon.badge)}
                            </View>
                        </TouchableOpacity>
                        {icon.dividerRight ? <View style={[Styles.toolBarDivider, { height: 20 }]} /> : null}
                    </View>
                ))}
            </View>
        );
    }
}

