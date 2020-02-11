import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
    deviceWidth: width,
    deviceHeight: height,
    isSmallDevice: width < 375,
    toolbarSize: 45,
    content_dialog_margin: 16,
    content_html_padidng_bottom: 16,
    common_padding: 8,
    common_margin: 8,
    text_padding: 4,
    common_vertical_margin: 12,
    toolbarPadding: 12,
    bottom_bar_height: 48,
    //font_size
    font_size_normal_13: 15,
    font_size_small_12: 12,
    font_size_small_10: 10,
    font_size_normal_15: 15,
    font_size_lager_16: 16,
    font_size_lager_18: 18,
    h2t_thumb_size: 96,
    avatar_large: 48,
    item_height: 56
}
