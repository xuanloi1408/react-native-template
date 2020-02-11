import { ImageStyle, StyleProp, StyleSheet } from 'react-native';
import Colors from './Colors';
import { FONT_NAME_REGULAR } from './Constants';
import Dimens from './Dimens';



export const iconStyle = (size): StyleProp<ImageStyle> => ({
    width: size,
    height: size,
    resizeMode: 'contain',
});

export default StyleSheet.create({
    root: {
        flex: 1,
    },

    overlay: {
        flex: 1,
        zIndex: 1,
        position: 'absolute',
    },

    app: {
        flex: 1,
        backgroundColor: Colors.main,
    },

    container: {
        backgroundColor: Colors.white,
        padding: Dimens.common_padding,
    },

    content: {
        flex: 1,
    },

    main_content: {
        flex: 1,
        backgroundColor: Colors.white,
    },

    tabBar: {
        height: Dimens.bottom_bar_height,
        borderTopColor: Colors.dim,
        borderTopWidth: 1,
    },

    toolBar: {
        height: Dimens.toolbarSize,
        backgroundColor: Colors.toolbarBackgroundColor,
        justifyContent: 'center',
        borderBottomColor: Colors.toolBarIndicator,
        borderBottomWidth: 1,
        alignItems: 'center',
    },

    toolBarDivider: {
        backgroundColor: Colors.toolBarIndicator,
    },
    verticalDivider: {
        backgroundColor: Colors.dim,
        width: 1,
    },
    horizontalDivider: {
        backgroundColor: Colors.dim,
        marginBottom: 2,
        marginTop: 2,
        height: 1,
    },

    iconToolBarContainer: {
        position: 'absolute',
        height: Dimens.toolbarSize,
        width: Dimens.toolbarSize,
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
    },

    iconToolBar: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },

    titleToolBar: {
        top: 0,
        height: Dimens.toolbarSize,
        fontSize: Dimens.font_size_lager_16,
        lineHeight: Dimens.toolbarSize,
        paddingLeft: Dimens.toolbarPadding,
        paddingRight: Dimens.toolbarPadding,
        color: Colors.toolBarTextColor,
        position: 'absolute',
    },

    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    centerVertical: {
        flex: 1,
        justifyContent: 'center',
    },

    centerHorizontal: {
        flex: 1,
        alignItems: 'center',
    },

    centerFull: {
        flex: 1,
        width: Dimens.deviceWidth,
        height: Dimens.deviceHeight - 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    centerNoFlex: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    row: {
        flexDirection: 'row',
    },

    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    rowCenterVertical: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rowCenterHorizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    rowWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    absolute: {
        position: 'absolute',
    },

    imgBig: {
        width: Dimens.deviceWidth / 2,
        height: Dimens.deviceWidth / 2,
        resizeMode: 'contain',
    },

    imgMedium: {
        width: Dimens.deviceWidth / 3,
        height: Dimens.deviceWidth / 3,
        resizeMode: 'contain',
    },

    imgSmall: {
        width: Dimens.deviceWidth / 4,
        resizeMode: 'contain',
    },

    imgFull: {
        width: Dimens.deviceWidth,
        resizeMode: 'contain',
    },

    textCenter: {
        textAlign: 'center',
    },
    
    textBold: {
        fontWeight: 'bold',
    },

    textPrimarySmall: {
        color: Colors.textPrimary,
        fontSize: Dimens.font_size_small_10,
        fontFamily: FONT_NAME_REGULAR,

    },

    textPrimaryNormal: {
        paddingTop: 2,
        paddingBottom: 2,
        color: Colors.textPrimary,
        fontSize: Dimens.font_size_normal_13,
        fontFamily: FONT_NAME_REGULAR,
    },

    textPrimaryLarge: {
        color: Colors.textPrimary,
        fontSize: Dimens.font_size_lager_16,
        fontFamily: FONT_NAME_REGULAR,
        lineHeight: 20,
    },
    textPrimaryHuge: {
        color: Colors.textPrimary,
        fontSize: Dimens.font_size_lager_18,
        fontFamily: FONT_NAME_REGULAR,
        lineHeight: 24,
    },

    textSecondarySmall: {
        color: Colors.textSecondary,
        fontSize: Dimens.font_size_small_10,
        fontFamily: FONT_NAME_REGULAR,
    },

    textSecondaryNormal: {
        paddingTop: 2,
        color: Colors.textSecondary,
        fontSize: Dimens.font_size_normal_13,
        fontFamily: FONT_NAME_REGULAR,
        lineHeight: 17,
    },

    textSecondaryLarge: {
        color: Colors.textSecondary,
        fontSize: Dimens.font_size_lager_16,
        fontFamily: FONT_NAME_REGULAR,
    },

    textHighlightSmall: {
        color: Colors.textHighlight,
        fontSize: Dimens.font_size_small_10,
        fontFamily: FONT_NAME_REGULAR,
    },

    textHighlightNormal: {
        paddingTop: 2,
        color: Colors.textHighlight,
        fontSize: Dimens.font_size_normal_13,
        fontFamily: FONT_NAME_REGULAR,
    },

    textHighlightLarge: {
        color: Colors.textHighlight,
        fontSize: Dimens.font_size_lager_16,
        fontFamily: FONT_NAME_REGULAR,
    },

    textWhiteSmall: {
        color: Colors.white,
        fontSize: Dimens.font_size_small_10,
        fontFamily: FONT_NAME_REGULAR,
    },

    textWhiteNormal: {
        color: Colors.white,
        fontSize: Dimens.font_size_normal_13,
        fontFamily: FONT_NAME_REGULAR,
    },

    textWhiteLarge: {
        color: Colors.white,
        fontSize: Dimens.font_size_lager_16,
        fontFamily: FONT_NAME_REGULAR,
    },

    btn: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        paddingLeft: 12,
        paddingRight: 12,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.buttonPrimary,
        borderRadius: 4,
    },

    btnGoogle: {
        backgroundColor: Colors.google,
        borderWidth: 1,
        paddingLeft: 12,
        paddingRight: 12,
        height: 42,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.transparent,
        borderRadius: 4,
    },

    btnFacebook: {
        backgroundColor: Colors.facebook,
        borderWidth: 1,
        paddingLeft: 12,
        paddingRight: 12,
        height: 42,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.transparent,
        borderRadius: 4,
    },

    btnPrimary: {
        backgroundColor: Colors.buttonPrimary,
        borderWidth: 1,
        paddingLeft: 12,
        flex: 1,
        paddingRight: 12,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.primary,
        borderRadius: 4,
    },

    btnSecondary: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        paddingLeft: 12,
        paddingRight: 12,
        height: 42,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.buttonPrimary,
        borderRadius: 4,
    },

    btnDisable: {
        backgroundColor: Colors.dim,
        borderWidth: 1,
        paddingLeft: 12,
        paddingRight: 12,
        height: 42,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.primary,
        borderRadius: 4,
    },

    btnHighlight: {
        backgroundColor: Colors.snack_bar_background,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 80,
        height: 42,
        flex: 1,
        paddingLeft: Dimens.common_padding,
        paddingRight: Dimens.common_padding,
        borderColor: Colors.primary,
        borderRadius: 4,
    },

    space: {
        backgroundColor: Colors.transparent,
        height: 8,
        width: 8,
    },

    icon_48: {
        width: 48,
        height: 48,
        resizeMode: 'contain',
    },

    avatar_48: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },

    icon_40: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },

    icon_32: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
    },

    icon_24: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },

    icon_20: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },

    icon_16: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },

});


