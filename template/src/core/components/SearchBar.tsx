import * as React from 'react';
import { PureComponent } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import Images from 'src/core/common/Images';
import Styles from 'src/core/common/Styles';
import Colors from 'src/core/common/Colors';

const styles = StyleSheet.create({
    content: {
        ...Styles.rowCenterVertical,
        borderRadius: 6,
        paddingHorizontal: 8,
        height: 36,
        backgroundColor: 'rgba(142, 142, 147, 0.12)',
    },

    container: {
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderBottomColor: Colors.divider,
        borderBottomWidth: 1,
    },

    inputText: {
        ...Styles.textPrimaryNormal,
        flex: 1,
        marginLeft: 8,
        height: 36,
    },
});

type ISearchBarProps = {
    searching(text)
}

type ISearchBarState = {
    text: string
}

export default class SearchBar extends PureComponent<ISearchBarProps, ISearchBarState> {

    state = {
        text: '',
    }

    _onChangeText = (text) => {
        this.setState({ text });
    }

    render() {
        return <View style={styles.container}>
            <View style={styles.content}>
                <Image source={Images.ic_search} style={Styles.icon_16} />
                <TextInput placeholder={'Tìm kiếm'}
                    onChangeText={this._onChangeText}
                    value={this.state.text}
                    style={styles.inputText}
                />
            </View>

        </View>;
    }
}