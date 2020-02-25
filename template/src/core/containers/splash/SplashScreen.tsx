// @ts-ignore
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Colors from 'src/core/common/Colors';
import Dimens from 'src/core/common/Dimens';
import Images from 'src/core/common/Images';
import Styles from 'src/core/common/Styles';
import BaseScreen from 'src/core/components/BaseScreen';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { _init } from './actions';


type ISplashProps = {
    init()
}

const styles = StyleSheet.create({
    logo: {
        width: Dimens.deviceWidth / 2,
        height: Dimens.deviceWidth / 2,
    },
    container: {
        ...Styles.container,
        ...Styles.center,
        marginBottom: 0,
    },
    loadingText: {
        ...Styles.textHighlightSmall,
        ...Styles.textCenter,
        position: 'absolute',
        bottom: 48,
    },
});

class SplashScreen extends BaseScreen<ISplashProps> {

    async prepareData() {
        super.prepareData();
        await this.props.init();
    }

    render() {
        return (
            <View style={[Styles.root, { backgroundColor: Colors.main }]}>
                <StatusBar barStyle="default" backgroundColor={Colors.primaryDark} />
                <View style={Styles.content}>
                    <View style={styles.container}>
                        <FastImage source={Images.ic_logo} style={styles.logo} resizeMode={'contain'} />
                        <Text style={styles.loadingText}>{'L       O       A       D       I       N       G'}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({  }) => ({  });

const mapDispatchToProps = {
    init: () => (dispatch: Dispatch<any>) => dispatch(_init()),
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);

