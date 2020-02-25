import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Images from '../common/Images';
import Styles from '../common/Styles';

const styles = StyleSheet.create({
    textMessage: {
        marginTop: 24,
    },
    container: {
        ...Styles.centerFull,
        position: 'absolute',
    },
});

interface IEmptyViewProps {
    msg: string
}

export default class EmptyView extends React.Component<IEmptyViewProps> {
    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <Image source={Images.ic_error_common} style={Styles.imgMedium} />
                <Text style={[Styles.textSecondaryNormal, styles.textMessage]}>{this.props.msg}</Text>
            </View>
        );
    }
}
